import {useState} from 'react'
import { Card } from 'react-bootstrap';
import FoodForm from './FoodForm'
import FoodCard from './FoodCard'


//This will be a parent of the foodcard component as well as the foodform component. It will hold state.
function FoodContainer() {

    const [food, setFood] = useState([])

    function handleFood(newFood) {
        console.log('adding new food', newFood)
        setFood([...food, newFood])
    }


    return(
        <div className='py-3 px-5'>
            <Card style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container">
                    <FoodForm onAddFood={handleFood}/>
                    <div className="mt-5 mb-4">
                        <h2>All Foods</h2>
                    </div>
                    <FoodCard food={food}/>
                </div>
            </Card>
        </div>
    )
}

export default FoodContainer