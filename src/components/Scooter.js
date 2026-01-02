import { useState} from "react";

function Scooter(){
    const [scooter, setScooter] = useState(
        {
            color: 'Red',
            brand: 'Honda',
            model: 'Activa 6G',
            year: 2020
        }
    );
    function updateColor(){
        setScooter(prevState => {
            return{ ...prevState, color:'Blue'}
        })
    }
    console.log('Current State', scooter)
    return<>
            <h1>My scooter</h1>
            <p>Color: {scooter.color}</p>
            <p>Brand:{scooter.brand}</p>
            <p>Model:{scooter.model}</p>
            <p>Year:{scooter.year}</p>
            <button onClick={ updateColor }>Changing the color of the car to Blue</button>
    </>
}
export default Scooter;