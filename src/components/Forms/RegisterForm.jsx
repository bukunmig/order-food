import React, { useState } from 'react'; 
import classes from './RegisterForm.module.css';


function RegisterForm() {

const [chefData, setChefData] = useState({
    name: '',
    cuisine: '',
    location: ''
})
 const handleChange = (event) => {
    setChefData({...chefData, [event.target.name]: event.target.value})
} 

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(chefData)
} 

  return (
    <div className={classes.background}>
        <h3> Start selling your meals here</h3>
    <form onSubmit={handleSubmit}  className={classes.formDesign}>
      <div>
        <label>Enter your Name </label>
        <input onChange={handleChange}  type='text' name='name'/>
      </div>

      <div>
        <label> Enter the types of cuisine you intend to cook </label>
        <input onChange={handleChange}  type='text' name='cuisine'/>
      </div>

      <div>
        <label> Enter your location</label>
        <input  onChange={handleChange} type='text' name='location'/>
      </div>


      <div>
        <button type='submit'>Sign Up </button>
      </div>
    </form>
  </div>
// };
  )
}; 

export default RegisterForm
