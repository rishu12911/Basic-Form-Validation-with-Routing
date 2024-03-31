import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        date:"",
        address:""
      });
      const [dataBase, setDataBase] = useState([]);
      const [errors, setErrors] = useState({});
      
      const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({...formData, [name]: value});
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
    
        if (!formData.name.match(/^[a-zA-Z\s]*$/)) {
          newErrors.name = "Name should have only A-Z";
        }
        if (formData.name.trim() === '') {
          newErrors.name = "Name cannot be empty";
        }
        if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
          newErrors.email = "Invalid email format";
        }
        if (formData.email.trim() === '') {
          newErrors.email = "Email cannot be empty";
        }
        if (formData.address.trim()===''){
          newErrors.address="Address Cannot be empty"
        }
       
        if (Object.keys(newErrors).length > 0) {
            newErrors.general="Please fill the fields correctly"
          setErrors(newErrors);
          return;
        }
        
        setDataBase([...dataBase, formData]);
        setFormData({
          name:"",
          email:"",
          phone:"",
          date:"",
          address:""
        });
        setErrors({});
        
        console.log("Registered");
        navigate('/submit')
      };   
  return (
    <div className="container">
      
      <form onSubmit={handleSubmit} className="form"> 
        <input type='text' placeholder="Enter full name" name='name' value={formData.name} onChange={handleChange} required/>
        {errors.name && <span className="error">{errors.name}</span>}
        <br/>
        
        <input type='email' placeholder="Enter email" name='email'value={formData.email} onChange={handleChange} required/>
        {errors.email && <span className="error">{errors.email}</span>}
        <br/>
        
        <input type='tel' placeholder="10 Digits phonenumber"  pattern="[0-9]{10}" name='phone'value={formData.phone} onChange={handleChange} required/>
        <br/>
        
        <input type='text' placeholder="Address"  name='address' value={formData.address} onChange={handleChange}  maxLength={70}required />
        {errors.address&& <span className='error'>{errors.address}</span>}
        <br/>
        
        <input type='date' placeholder="DOB"  name='date'value={formData.date} onChange={handleChange} required />
        <br/>
        
        
        <button type='submit'>Submit</button>
        {errors.general&& <span className='error'>{errors.general}</span>}

      </form>
    </div>
  )
}

export default Form