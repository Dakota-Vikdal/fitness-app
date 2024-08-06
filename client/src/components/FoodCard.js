import FoodItem from'./FoodItem'

function FoodCard({food}) {


    const foodItem = food.map((foodObj) => (
        <div className='col-md-4 col-lg-2 mb-3'>
            <FoodItem key={foodObj.id} {...foodObj}/>
        </div>
    ))

    return(
        <div className='row'>
            {foodItem}
        </div>
    )
}

export default FoodCard