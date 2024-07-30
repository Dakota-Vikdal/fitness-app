from app import app
from models import db, Food


with app.app_context():
    
    #Delete existing data once seed file is reinitialized
    Food.query.delete()
    db.session.commit()
    
    print('Creating Food...')
    pizza = Food(name='Pizza', carbs=2, fats=3, proteins=4, calories=100)
    pasta = Food(name='Pasta', carbs=11, fats=3, proteins=5, calories=222)
    
    
    food = [pizza, pasta]
    
    db.session.add_all(food)
    db.session.commit()
    
    print('seeding done!')