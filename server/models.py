
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Food(db.Model):
    
    __tablename__ = 'food'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    carbs = db.Column(db.Float, nullable=False, default=0.0)
    fats = db.Column(db.Float, nullable=False, default=0.0)
    proteins = db.Column(db.Float, nullable=False, default=0.0)
    calories = db.Column(db.Float, nullable=False, default=0.0)
    
    def __repr__(self):
        return f'<food {self.name}>'
    
