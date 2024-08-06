"""
docstring example
"""
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from models import db
from flask_migrate import Migrate
from flask_cors import CORS


app = Flask(__name__)

app.config[ 'SQLALCHEMY_DATABASE_URI' ] = 'sqlite:///database.db'
app.config[ 'SQLALCHEMY_TRACK_MODIFICATIONS' ] = False

db = SQLAlchemy()

migrate = Migrate( app, db )

db.init_app( app )

CORS(app)
