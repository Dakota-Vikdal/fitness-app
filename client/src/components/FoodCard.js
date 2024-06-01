import FoodItem from'./FoodItem'

function FoodCard({food}) {

    console.log(food)

    const foodItem = food.map((foodObj) => (
        <div className='col-2 m-3'>
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