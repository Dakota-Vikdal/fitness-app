from flask import request, make_response, jsonify
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename
import os
from config import app, db
from models import Food

api = Api(app)

class HomePage(Resource):
    def get(self):
        return {'message': 'Welcome to your home page'}, 200
    
api.add_resource(HomePage, '/')

# Define the upload folder and allowed extensions
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    """Check if the file extension is allowed."""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def save_image(image):
    """Save the uploaded image and return its URL."""
    if image and allowed_file(image.filename):
        filename = secure_filename(image.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image.save(filepath)
        image_url = f"http://localhost:5555/uploads/{filename}"
        return image_url
    else:
        raise ValueError("Invalid file type. Only images are allowed.")


class FoodPage(Resource):
    
    def get(self):
        f_list = []
        for f in Food.query.all():
            f_list.append( f.to_dict() )
            
            
        return make_response(f_list, 200)
    
    def post(self):
        if 'image' not in request.files:
            return jsonify({'error': 'No image file part'}), 400
        
        name = request.form.get('name')
        image = request.files.get('image')
        carbs = request.form.get('carbs')
        fats = request.form.get('fats')
        proteins = request.form.get('proteins')
        calories = request.form.get('calories')


        #save image if provided
        image_url = None
        if image and image.filename != '':
            try:
                image_url = save_image(image)
            except ValueError as e:
                return jsonify({'error': str(e)}), 400


        new_food = Food(
            name=name,
            image=image_url,
            carbs=float(carbs),
            fats=float(fats),
            proteins=float(proteins),
            calories=float(calories)
        )

        db.session.add(new_food)
        db.session.commit()

        return jsonify({'message': 'Food item added successfully!'}), 201
    

api.add_resource(FoodPage, '/food')



if __name__ == '__main__':
    app.run( port = 5555, debug = True )