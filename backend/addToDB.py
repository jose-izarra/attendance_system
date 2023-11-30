import azure.functions as func
import datetime
import json
import logging
import os
import random
import requests
import pyodbc
from azure.servicebus import ServiceBusClient

app = func.FunctionApp()

@app.route(route="addToDB", auth_level=func.AuthLevel.FUNCTION)
def addToDB(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

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

def random_code_generator():
    return random.randint(100000, 999999)

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

if __name__ == "__main__":
    main()
