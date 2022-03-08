import '../App.css';
import { useState } from 'react';
// import { connect } from 'react-redux';


function Form() {
    const [initialForm] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [form, setForm] = useState(initialForm)

    function handleChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setForm(initialForm)
    }
  return (
    <div className="Form">
             <h4>Contact Me:</h4>
         <form onSubmit={handleSubmit}>
             <label htmlFor="name">Name</label>
             <input type="text" name="name" 
                onChange={handleChange}
            />
            <br />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" 
                onChange={handleChange}
            />
            <br />

            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" 
                onChange={handleChange}
            />
            <br />

            <input type="submit"/>
        </form>
    </div>
  );
}

export default Form;