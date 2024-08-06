
import { Card } from 'react-bootstrap';


function FoodItem({name, carbs, fats, proteins, calories, image}) {
   

    return(
        <div className="food-card">
        <div className="food-card-header">{name}</div>
        <div className="food-card-body">
        {image && <Card.Img src={image} alt={name} className="food-image" />}
          <p><strong>Carbs:</strong> {carbs}g</p>
          <p><strong>Fats:</strong> {fats}g</p>
          <p><strong>Proteins:</strong> {proteins}g</p>
          <p><strong>Calories:</strong> {calories}</p>
        </div>
      </div>
    )
}

export default FoodItem