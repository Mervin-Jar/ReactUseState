import { useState } from "react"
function FavouriteColor(){
    //let color = 'Red';
    const [color, setColor] = useState('Red')
    function updateColor() {
        setColor('Blue')
    }
    return <>
               <h1> My favourite color is { color }</h1>
               <button onClick= { updateColor }>Changed to Blue</button>
          </>
}
export default FavouriteColor;