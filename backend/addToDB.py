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