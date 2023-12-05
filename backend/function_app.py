import azure.functions as func
import logging
import json
import random
import os
# from azure.servicebus import ServiceBusClient
from datetime import datetime
import mysql.connector
from azure.cosmosdb.table.tableservice import TableService
from azure.cosmosdb.table.models import Entity

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

db_details = {
    "user": os.environ.get("user"),
    "password" : os.environ.get("password"),
    "host" : os.environ.get("host"),
    "database": os.environ.get('db')
}

@app.route(route="singUp")
def signUp(req: func.HttpRequest) -> func.HttpResponse:
    rows = False  # just in case connection is unsuccessful
    
    # sample call for this function
    # http://localhost:7071/api/singUp?name=Jose%20Izarra&email=jaiza0912@gmail.com&password=mypassword&student=true
    # change to student=false to append to professors table
    
    try:
        # connection = pymysql.connect(**db_details)
        connection = mysql.connector.connect(**db_details)
        
        # load credentials to database if already doesnt exist
        id_num = random.randint(0, 1000000000)
        name = req.params.get('name')
        email = req.params.get('email')
        password = req.params.get('password')
        student = req.params.get('student')
        logging.info(f"------- name: {name}, email: {email}, password: {password}, student:{student}")
        
        
        if connection.is_connected:
            logging.info("------- Connected to database")
            
            cursor = connection.cursor()
            
            if student == "true":
                query = f"""
                            INSERT INTO students (student_id, student_name, student_email, student_password)
                            VALUES (%s, %s, %s, %s);
                        """
            else: 
                query = f"""
                            INSERT INTO professors (professor_id, professor_name, professor_email, professor_password)
                            VALUES (%s, %s, %s, %s);
                        """
            logging.info(f"------- QUERY: {query}")
            
            if id_num and name and email and password:
                cursor.execute(query, (id_num, name, email, password))
                connection.commit()
                logging.info('-------- Query executed correctly')
            
            sel = "SELECT * from students"
            cursor.execute(sel)
            rows = cursor.fetchall()
            
            for row in rows:
                logging.info(f'STUDENT TABLE: {row}')
                
    except mysql.connector.Error as e:
        logging.info(f"Error {e}")
    
    finally:
        if 'connection' in locals() and connection.is_connected:
            cursor.close()
            connection.close()
            logging.info("MySQL connection closed")
    
    if rows:
        return func.HttpResponse(f'Sign up successfull for credentials\n{rows}')
    else:
        # happens sometimes when data entered is repeated
        return func.HttpResponse(f'Something didnt\' go well')  


@app.route(route="login")
def login(req: func.HttpRequest) -> func.HttpResponse:
    rows = False
    # Example of trigger call:
    # http://localhost:7071/api/login?email=jaiza0912@gmail.com&password=mypassword&student=true
    try: 
        connection = mysql.connector.connect(**db_details)
        
        # get inputs
        email = req.params.get('email')
        password = req.params.get('password')
        student = req.params.get('student')
        
        if connection.is_connected:
            logging.info("------- Connected to database")
            
            cursor = connection.cursor()
            
            if student == 'true':
                query = f"""
                        SELECT student_email, student_password 
                        FROM students WHERE student_email= %s AND student_password= %s;
                        """
            else:
                query = f"""
                        SELECT professor_email, professor_password 
                        FROM professors WHERE professor_email= %s AND professor_password= %s;
                        """
            # sql_query = "SELECT column1, column2 FROM your_table_name WHERE column1 = %s AND column2 = %s"
            if email and password:
                cursor.execute(query, (email, password))
            
            rows = cursor.fetchall()
            
            # if exists, credentials are correct
            if rows:
                logging.info("------- Login credentials are correct")
            else:
                logging.info("------- Login credentials are incorrect")
                
    except mysql.connector.Error as e:
        logging.info(f'------- Error: {e}')
    
    finally: 
        if 'connection' in locals() and connection.is_connected:
            cursor.close()
            connection.close()
            logging.info("MySQL connection closed")
    if rows:
        return func.HttpResponse(f'{rows}')
    else:
        return func.HttpResponse(f'Something didn\'t go well')
            
            
     
@app.route(route="addNewCourse")
def addNewCourse(req: func.HttpRequest) -> func.HttpResponse:   
    rows = False
    # This function will be called by the teachers
    
    # Example call
    #http://localhost:7071/api/addNewCourse?course_code=12345&course_name=Designing%20and%20Using%20Databases&prof_email=eduardo@gmail.com
    try: 
        connection = mysql.connector.connect(**db_details)
        
        # get inputs
        course_id = random.randint(0, 1000000000)
        course_code = req.params.get('course_code')
        course_name = req.params.get('course_name')
        prof_email = req.params.get('prof_email')
        
        if connection.is_connected:
            logging.info("------- Connected to database")
            
            cursor = connection.cursor()
            
            # get professor id
            
            query = f"""
                        SELECT professor_id 
                        FROM professors WHERE professor_email= '{prof_email}';
                    """
            
            cursor.execute(query)
            
            prof_id = cursor.fetchall()[0][0]
            
            if prof_id:
                logging.info(f'------ prof_id: {prof_id}')
            else:
                logging.info(f'------ prof_id doesnt exist')
            
            query = """
                    INSERT INTO courses (course_id, course_code, course_name, professor_id)
                    VALUES (%s, %s, %s, %s);
                    """
                    
            if course_id and course_code and course_name and prof_id:
                cursor.execute(query, (course_id, course_code, course_name, prof_id))
                connection.commit()
                logging.info('-------- Query executed correctly')
            else: 
                logging.info('-------- Error entering inputs')
            
            sel = "SELECT * FROM courses;"
            cursor.execute(sel)
            rows = cursor.fetchall()
            
            for row in rows:
                logging.info(f'COURSES TABLE: {row}')
            
    except mysql.connector.Error as e:
        logging.info(f'------- Error: {e}')
    
    finally:
        if 'connection' in locals() and connection.is_connected:
            cursor.close()
            connection.close()
            logging.info("MySQL connection closed")
            
    if rows:
        return func.HttpResponse(f'Successfully added to courses\n{rows}')
    else:
        return func.HttpResponse(f'Something didn\'t go well')
    
    
    
def get_student_id(cursor, email):
    query = "SELECT student_id FROM students WHERE student_email = %s;"
    cursor.execute(query, (email,))
    result = cursor.fetchone()
    logging.info(f"\n------ student_id fetched: {result[0]}")
    return result[0] if result else None

def get_course_id(cursor, code):
    query = "SELECT course_id FROM courses WHERE course_code = %s;"
    cursor.execute(query, (code,))
    result = cursor.fetchone()
    logging.info(f"------ course_id fetched: {result[0]}\n")
    return result[0] if result else None
    
@app.route(route="addStudentToCourse")
def addStudentToCourse(req: func.HttpRequest) -> func.HttpResponse:
    rows = False
    
    # Example call
    # http://localhost:7071/api/addStudentToCourse?student_email=jaiza0912@gmail.com&course_code=12345
    try:
        connection = mysql.connector.connect(**db_details)
        email = req.params.get("student_email")
        course_code = req.params.get("course_code")
        
        if connection.is_connected:
            logging.info("------- Connected to database")
            
            cursor = connection.cursor()
            
            student_id = get_student_id(cursor, email)
            course_id = get_course_id(cursor, course_code)

            if student_id and course_id:
                enrollment_id = random.randint(0, 1000000000)
                query = """
                            INSERT INTO student_courses (enrollment_id, student_id, course_id)
                            VALUES (%s, %s, %s);
                        """
                cursor.execute(query, (enrollment_id, student_id, course_id))
                logging.info('-------- Query executed correctly')
                connection.commit()
                
                query = "SELECT * FROM student_courses;"
                cursor.execute(query)
                
                rows = cursor.fetchall()
                logging.info(f'------- ROWS: {rows}')
                
            else:
                logging.warning(f'Student with email {req.params.get("student_email")} or course with code {req.params.get("course_code")} not found.')
            
    
    except mysql.connector.Error as e:
        logging.info(f'------- Error: {e}')
    
    finally:
        if 'connection' in locals() and connection.is_connected:
            cursor.close()
            connection.close()
            logging.info("MySQL connection closed")
            
    if rows:
        return func.HttpResponse(f'Successfully enrolled student to course\n{rows}')
    else:
        return func.HttpResponse(f'Something didn\'t go well')
    

def get_students_enrolled(cursor, course_id):
    query = "SELECT student_id FROM student_courses WHERE course_id = %s;"
    cursor.execute(query, (course_id,))
    return cursor.fetchall()



def populate_attendance_log(cursor, class_date, course_id, enrolled_students):
    attendance = False  # default is set to absent
    logging.info('----- Iterating through enrolled students')
    for student_id in enrolled_students:
        # logging.info(class_date, type(student_id[0]), course_id, attendance)
        query = """
                    INSERT INTO attendance_log (class_date, student_id, course_id, attendance)
                    VALUES (%s, %s, %s, %s);
                """
        cursor.execute(query, (class_date, student_id[0], course_id, attendance))

    logging.info('-------- Attendance logs initialized successfully')


@app.route(route="addAttendanceLog")
def addAttendanceLog(req: func.HttpRequest) -> func.HttpResponse:
    rows = False
    # Example call
    # http://localhost:7071/api/addAttendanceLog?course_code=12345
    try:
        connection = mysql.connector.connect(**db_details)
        course_code = req.params.get('course_code')
        logging.info(f'------ course_code {course_code}')
        
        if connection.is_connected:
            logging.info("------- Connected to database")
            
            cursor = connection.cursor()
            
            # Same time for everyone, as teacher will be initializing
            course_id = get_course_id(cursor, course_code)
            logging.info(f'------ course_id {course_id}')
            
            class_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            logging.info(f'------ class_date {class_date}')
            
            enrolled_students = get_students_enrolled(cursor, course_id)         
            logging.info(f'------ enrolled {enrolled_students}')
            
            # call populate function
            populate_attendance_log(cursor, class_date, course_id, enrolled_students)
            connection.commit()

            sel = "SELECT * FROM attendance_log;"
            cursor.execute(sel)
            rows = cursor.fetchall()

            for row in rows:
                print(f'ATTENDANCE_LOG TABLE: {row}')
            
    
    except mysql.connector.Error as e:
        logging.info(f'------- Error: {e}')
    
    finally:
        if 'connection' in locals() and connection.is_connected:
            cursor.close()
            connection.close()
            logging.info("MySQL connection closed")
            
    if rows:
        return func.HttpResponse(f'Successfully enrolled student to course\n{rows}')
    else:
        return func.HttpResponse(f'Something didn\'t go well')
"""
name = req.params.get('name')
if not name:
    try:
        req_body = req.get_json()
    except ValueError:
        pass
    else:
        name = req_body.get('name')

if name:
    return func.HttpResponse(f"Hello, {name}. This HTTP triggered function executed successfully.")
else:
    return func.HttpResponse(
            "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
            status_code=200
    )
"""
        
  
@app.route(route="createCode")
def createCode(req: func.HttpRequest) -> func.HttpResponse:
    # this function will be called by the professor to initialize the code every 30 seconds
    
    logging.info('VERIFYCODE Python HTTP trigger function processed a request.')
    code = random.randint(100000, 999999)
    
    # send to front end to display
    
    if code:
        return func.HttpResponse(f"This HTTP triggered function executed successfully.\nRandom code generated: {code}")
    else:
        return func.HttpResponse(
             "HTTP triggered function executed successfully. Code wasn't passed successfully",
             status_code=200
        )
        
@app.route(route="verifyCode")
def verifyCode(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("VERIFYCODE function")
    
    studentInput = req.params.get('code')
    studentCredentials = req.params.get('credentials')
 
    # add the data to the Azure table if the code is correct.
    if studentInput == CURRENT_CODE:
        
        connection_string = os.environ.get('AzureWebJobsStorage')

        table = TableService(connection_string)
        table.create_table('successfulLogIn') # The parameters to be passed are the email of the student

        task = Entity()
        task.PartitionKey = 'LogData'
        task.RowKey = 'studentData'
        task.email = studentCredentials
        task.code = studentInput

    # Service bus to get the current output code of the 
        
    return func.HttpResponse("Hello")

# def random_code_generator():
#     return random.randint(100000, 999999)
"""
def send_code_to_frontend(code):
    response = requests.post("http://astro-website.com/api/sendcode", data={"code": code})
    return response.json()

def verify_code_and_credentials(received_code, generated_code, credentials):
    if received_code != generated_code:
        send_error_message()
        send_to_dead_letter_queue(credentials)
        return "Error: Code mismatch"
    if verify_credentials_with_database(credentials):
        # Add data to SQL database
        return "Credentials verified and data added to SQL database"
    else:
        return "Invalid credentials"

def verify_credentials_with_database(credentials):
    #This is where we will connect to the database and verify the credentials
    return

def send_error_message():
    requests.post("http://astro-website.com/api/error", data={"message": "Code mismatch"})

def send_to_dead_letter_queue(data):
    connection_str = "YOUR_AZURE_SERVICE_BUS_CONNECTION_STRING"
    queue_name = "YOUR_DEAD_LETTER_QUEUE_NAME"
    
    with ServiceBusClient.from_connection_string(connection_str) as client:
        with client.get_queue_sender(queue_name) as sender:
            sender.send_messages(data)

def main():
    generated_code = random_code_generator()
    response = send_code_to_frontend(generated_code)
    received_code = response['code']
    credentials = response['credentials']

    result = verify_code_and_credentials(received_code, generated_code, credentials)
    print(result)
    

"""