import azure.functions as func
import datetime
import json
import logging
import os
import random

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

def send_code_to_astro_website(code):
    return

def verify_code_and_credentials(received_code, generated_code, credentials):
    if received_code != generated_code:
        send_error_message_to_astro()

def verify_credentials_with_database(credentials):
    return

def send_error_message_to_astro():

def send_to_dead_letter_queue(data):

def main():
    