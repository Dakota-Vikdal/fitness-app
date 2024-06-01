import {useState} from 'react'
import './FoodItem.css'
import {Card, CardBody} from 'react-bootstrap'

function FoodForm({onAddFood}) {

    const [foodName, setFoodName] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [proteins, setProteins] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const calories = 4 * parseInt(carbs) + 9 * parseInt(fats) + 4 * parseInt(proteins)

        const newFood = {   
            name: foodName,
            carbs: parseInt(carbs),
            fats: parseInt(fats),
            proteins: parseInt(proteins),
            calories: calories
        }

        onAddFood(newFood)

        // setFoodName('')
        // setCarbs('')
        // setFats('')
        // setProteins('')
    }


    return(
        <div style={{ marginTop: '50px'}}>
            <Card>
                <CardBody>
                    <div>
                        <h2 className='mb-4'>Add New Food</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label>
                                <strong>Food Name:</strong>
                                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)}  style={{ marginLeft: "10px", marginRight:"10px" }} required />
                                </label>
                                <label className= 'px-5'>
                                <strong>Carbs (g):</strong>
                                <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} style={{ marginLeft: "10px", marginRight:"10px" }} required />
                                </label>
                                <label>
                                <strong>Fats (g):</strong>
                                <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} style={{ marginLeft: "10px", marginRight:"10px" }} required />
                                </label>
                                <label>
                                Proteins (g):
                                <input type="number" value={proteins} onChange={(e) => setProteins(e.target.value)} style={{ marginLeft: "10px", marginRight:"10px" }} required />
                                </label>
                            </div>
                            <button type="submit" className='btn btn-primary'>Add Food</button>
                        </form>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default FoodForm


//<div>

//     <h2>Add New Food</h2>
//     <form onSubmit={handleSubmit}>
//         <input type='text' value={foodName} onChange={(e) => setFoodName(e.target.value)} />
//         <input type='number' value={carbs} onChange={(e) => setCarbs(e.target.value)} />
//         <input type='number' value={fats} onChange={(e) => setFats(e.target.value)} />
//         <input type='number' value={proteins} onChange={(e) => setProteins(e.target.value)} />
//         <button type='submit' className='btn btn-primary'>Add Food</button>
//     </form>
// </div>