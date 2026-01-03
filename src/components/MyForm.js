import {useState} from "react";

function MyForm() {
    //const [name, setName] = useState('');
    //const [age, setAge] = useState('');
    //const [email, setEmail] = useState('');
    const [inputs, setInputs] = useState({phone: '+91', country: 'Select', about:'Im a student'});
    function handleSubmit(e){
        e.preventDefault();
        console.log('Form Submitted');
        //console.log('Current Name', name)
        //console.log('Current Age', age)
        //console.log('Current Email', email  )
        console.log('Current State', inputs);
    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        setInputs((prevState)=>{ return {...prevState, [name]: value}})
    }
    //<label>Enter the name<input type='text' onChange={(e) => {setName(e.target.value)}}/></label><br/>
    return <form onSubmit={handleSubmit}>
            <label>Enter the name<input type='text' name = 'name' onChange={handleChange}/></label><br/>
            <label>Enter the age<input type='text'  name = 'age' onChange={handleChange}/></label><br/>
            <label>Enter the email<input type='text' name = 'email' onChange={handleChange}/></label><br/>
            <label>Enter the Phone<input type='text' name = 'phone' onChange={handleChange} value={inputs.phone}/></label><br/>
        <label>Enter the country:
            <select name = 'country' onChange={handleChange} value={inputs.country}>
                <option value=''>Select</option>
                <option value='India'>India</option>
                <option value='Australia'>Australia</option>
                <option value='United States'>United States</option>
            </select>
        </label><br/>
        <label>Enter about yourself: <textarea name= 'about' value={inputs.about} onChange={handleChange}></textarea></label><br/>
            <input type='submit' value='Submit Form'/>
    </form>
}
export default MyForm;