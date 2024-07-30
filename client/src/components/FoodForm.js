import {useState} from 'react'
import './FoodItem.css'
import {Card, CardBody} from 'react-bootstrap'

function FoodForm({onAddFood}) {

    const [foodName, setFoodName] = useState('')
    const [foodImage, setFoodImage] = useState(null)
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [proteins, setProteins] = useState('')
    const [previewUrl, setPreviewUrl] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        const calories = 4 * parseInt(carbs) + 9 * parseInt(fats) + 4 * parseInt(proteins)

        const newFood = {   
            name: foodName,
            image: foodImage,
            carbs: parseInt(carbs),
            fats: parseInt(fats),
            proteins: parseInt(proteins),
            calories: calories
        }

        onAddFood(newFood)

        //clears the form field
        // setFoodName('');
        // setFoodImage(null);
        // setCarbs('');
        // setFats('');
        // setProteins('');
        // setPreviewUrl('');
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        setFoodImage(file);
        setPreviewUrl(URL.createObjectURL(file));
      }



    return(
        <div style={{ marginTop: '50px'}}>
            <Card>
                <CardBody>
                    <div>
                        <h2 className='mb-3'>Add New Food</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='row mb-3'>
                            <div className='col-md-4'>
                                <label><strong>Food Name:</strong></label>
                                <input
                                type="text"
                                className="form-control"
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
                                required
                                />
                            </div>
                            <div className='col-md-4'>
                                <label><strong>Food Image:</strong></label>
                                <br></br>
                                <input
                                type="file"
                                accept="image/*"
                                className="form-control-file"
                                onChange={handleFileChange}
                                />
                                {/* {previewUrl && <img src={previewUrl} alt="Preview" width="100" />} */}
                            </div>
                            <div className='col-md-4'>
                                <label><strong>Carbs (g):</strong></label>
                                <input
                                type="number"
                                className="form-control"
                                value={carbs}
                                onChange={(e) => setCarbs(e.target.value)}
                                required
                                />
                            </div>
                            <div className='col-md-4'>
                                <label><strong>Fats (g):</strong></label>
                                <input
                                type="number"
                                className="form-control"
                                value={fats}
                                onChange={(e) => setFats(e.target.value)}
                                required
                                />
                            </div>
                            <div className='col-md-4'>
                                <label><strong>Proteins (g):</strong></label>
                                <input
                                type="number"
                                className="form-control"
                                value={proteins}
                                onChange={(e) => setProteins(e.target.value)}
                                required
                                />
                            </div>
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




// <div className='form-group'>
//                 <label><strong>Food Name:</strong></label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={foodName}
//                   onChange={(e) => setFoodName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className='form-group'>
//                 <label><strong>Food Image:</strong></label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="form-control-file"
//                   onChange={handleFileChange}
//                 />
//                 {previewUrl && <img src={previewUrl} alt="Preview" width="100" />}
//               </div>
//               <div className='form-group'>
//                 <label><strong>Carbs (g):</strong></label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={carbs}
//                   onChange={(e) => setCarbs(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className='form-group'>
//                 <label><strong>Fats (g):</strong></label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={fats}
//                   onChange={(e) => setFats(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className='form-group'>
//                 <label><strong>Proteins (g):</strong></label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={proteins}
//                   onChange={(e) => setProteins(e.target.value)}
//                   required
//                 />
//               </div>