import {useState} from "react";

function MyForm() {
    const [name, setName] = useState('')
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted');
        console.log('Current Name', name)
    }
    return <form onSubmit={handleSubmit}>
            <label>Enter the input</label><input type='text' onChange={(e) => {setName(e.target.value)}}/>
            <input type='submit' value='Submit Form'/>
    </form>
}
export default MyForm;