from config import app, db
from models import Food


with app.app_context():
    
    #Delete existing data once seed file is reinitialized
    Food.query.delete()
    db.session.commit()
    
    print('Creating Food...')
    gbeef = Food(name='8oz of ground beef', image='https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F7316724c222a866eb001b13dc88f0c0754795016', carbs=0, fats=44.8, proteins=38.46, calories=569)
    rice = Food(name='1 cup of Jasmine rice', image='https://www.onceuponachef.com/images/2014/10/jasmine-rice-1.jpg', carbs=43.7, fats=1.7, proteins=4.2, calories=213)
    brussels = Food(name='1 cup of steamed brussel sprouts', image='https://www.acouplecooks.com/wp-content/uploads/2022/03/Steamed-Brussels-Sprouts-004.jpg', carbs=7, fats=3, proteins=3, calories=50)
    broccoli = Food(name='1 cup of steamed broccoli', image='https://www.simplyrecipes.com/thmb/3P0YMdPb1mnxIDx0B3oVSA7ax0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__01__steamed-broccoli-horiz-a-2000-86017ef49d3e4b1a95d6f67061e8e354.jpg', carbs=11, fats=4, proteins=6, calories=94)
    spotato = Food(name='1 cup of cooked sweet potato', image='https://cdn.media.amplience.net/i/japancentre/recipe-1668-japanese-baked-sweet-potato/Japanese-baked-sweet-potato?$poi$&w=700&h=410&sm=c&fmt=auto', carbs=41.18, fats=0.21, proteins=3, calories=176)
    chicken = Food(name='8oz of chicken', image='https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breast-index-6626cdb057b5b.jpg?crop=0.503xw:1.00xh;0.249xw,0&resize=1200:*', carbs=0, fats=6.2, proteins=53.4, calories=284)
    
    
    food = [gbeef, rice, brussels, broccoli, spotato, chicken]
    
    db.session.add_all(food)
    db.session.commit()
    
    print('seeding done!')