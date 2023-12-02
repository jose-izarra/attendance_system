import azure.functions as func
import logging
import datetime
import json
import os
import requests
import pymysql
from azure.servicebus import ServiceBusClient
from time import sleep

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="addToDB")
def addToDB(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('ADDTODB Python HTTP trigger function processed a request.')
    
    logging.info(os.environ['user'])
    logging.info(os.environ['password'])
    logging.info(os.environ['host'])
    
    user = os.environ.get("user")
    password = os.environ.get("password")
    host = os.environ.get("host")
    database = os.environ.get("db")
    
    if user and password and host and database:
        try: 
            cnx = pymysql.connect(user=user, password=password,
                                        host=host, database=database)
            if cnx.open:
                
                cursor = cnx.cursor()
                logging.info("=== Testing connection to database")
                
                query = 'SELECT * from CC_5;'
                logging.info(query)
                
                rs=cursor.execute(query)
                rs=cursor.fetchall()
                logging.info(rs)
            
        except ValueError:
            pass
    else:
        logging.info("Local settings variables couldn't be found")
        
    if rs:
        return func.HttpResponse(f"Successfully added. \n{rs}")
    else:
        return func.HttpResponse(f"HTTP triggered successfully. Data not added", status_code=200)
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
    import random
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
    
    studentInput = req.params.get('studentInput')

    # Service bus to get the current output code of the 
        
    return func.HttpResponse("Hello")

# def random_code_generator():
#     return random.randint(100000, 999999)

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
    

