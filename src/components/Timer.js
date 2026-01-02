import {useState, useEffect} from "react";

function Timer (){
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount((prevState) => prevState +1)
        }, 1000)
    })


    return <>
            <h1>Here the count is increased {count} many times using useEffect</h1>
    </>
}
export default Timer;