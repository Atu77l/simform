from flask import Flask, render_template, request, redirect, url_for, flash, jsonify,make_response
import json
import datetime
import os
import sys
from pymongo import MongoClient
from flask_cors import cross_origin
from flask_cors import CORS
from bson.objectid import ObjectId
from dotenv import load_dotenv
from Database.connectDB import connectDB
import asyncio
from jinja2 import Template  # Add this line to import the Template class
import secrets


db=connectDB()
app = Flask(__name__, template_folder='templates')
# This is for Sending the mail using library Nodemailer
load_dotenv()
secret_key = os.environ.get('SECRET_KEY')

# app = Flask(__name__, template_folder='templates')
app = Flask(__name__,template_folder='templates', static_url_path='/api/static', static_folder='static')

origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://localhost:5173/email",
]
# Initialize CORS with your app and configure it
CORS(
    app,
    origins=origins,
    supports_credentials=True,  # allow_credentials=True in Flask-CORS
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],  # allow_methods=["*"] in Flask-CORS
    headers=["*"],  # allow_headers=["*"] in Flask-CORS
)

# api for handle the signup 
@app.route('/api/email',methods=["POST"])
def subscription_email():   
    try:     
        collection = db['email']
        collection.insert_one({'email':request.json['email']})
        return jsonify({'status':200,'email':request.json['email']}),200
    except Exception as e:
        error_message = str(e)
        return jsonify({'status':500,'message':"Try Again Later"}),500

# # api for handle forget password  
@app.route('/api/contact',methods=['POST'])
def contact_detail():
    try:
       # Check if the email exists in your user database
        collection = db['contact']
        data=db['contact'].find_one(request.json)
        return jsonify({"status":"200","message": "Contact sent successfully!"}),200
    except Exception as e:
        return jsonify({"status":"400",'message':"Something Error."}),400

if __name__ == '__main__':
    app.secret_key = "^A%DJAJU^JJ113"
    app.run(debug=True,port=5000)
