import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Form, FloatingLabel, Button} from 'react-bootstrap';
import "../Components/ContactForm.css";
import "./Contact.css";

const Contact = () => { 
 
  const navigate = useNavigate();

  const [user,setUser] = useState({name:"",date:"",gender:"",problem:"",phone:"",email:""})
  
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const {name,value} = event.target;
    setUser({...user, [name] : value});
  }  
    const postData = async (e)=>{
    
      setLoading(true)
      const {name, date, gender, problem, phone, email} = user;
      setUser({
        name:"",
        date:"",
        gender:"", 
        problem:"",
        phone:"",
        email:""
      })

      const res = await fetch("/register",{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
         name, date, gender, problem, phone, email
        })
      })
  
      const data = await res.json();

      if(data.status === 400 || !data)
      {
        window.alert("Please fill the entries properly")
        setLoading(false)
      }
      else if(data.status === 408)
      {
        navigate("/failure");
      }
      else{
        navigate("/success")
      }
   
    }

  return(
  <>

   <div className='contact-page'>

      <div className='contact-page-imgi-div'>
        <img className='contact-page-img' src="./Assets/registration-img.png" alt="Registration"/>
      </div>

      <div className='contact-page-form'>
       <div className="form">
        <div className='form-input'>
          <Form method="POST">
               <FloatingLabel className='form-inputs' controlId="floatingInput" label="Full Name" >
                  <Form.Control type="text" placeholder="Full Name" name="name" value={user.name}  onChange={handleChange} required='true' />
                </FloatingLabel>

                <FloatingLabel className='form-inputs' controlId="DateOfBirth" label="Date of birth">
                    <Form.Control type="Date" placeholder="Date" name="date" value={user.date}  onChange={handleChange} required='true' />
                </FloatingLabel>

                <FloatingLabel className='form-inputs' controlId="Gender" label="Gender">
                    <Form.Select aria-label='Select gender' name="gender" value={user.gender} onChange={handleChange} required='true' >
                      <option >Select your gender</option>
                      <option >Male</option>
                      <option >Female</option>
                    </Form.Select>
                </FloatingLabel>
                 
                <FloatingLabel className='form-inputs' controlId="floatingTextArea" label="Describe your problem">
                    <Form.Control className='form-inputs' as='textarea' placeholder="Describe your problem" style={{height:'100px'}} name="problem" value={user.problem}  onChange={handleChange} required='true' />
                </FloatingLabel>

                <FloatingLabel className='form-inputs' controlId="phoneNumber" label="Phone number">
                    <Form.Control type="Number" placeholder="Phone number" name="phone" value={user.phone}  onChange={handleChange} required='true' />
                </FloatingLabel>

              <FloatingLabel className='form-inputs' controlId='emailAddress' label='email address'>
                    <Form.Control type='email' placeholder='email address' name="email" value={user.email}  onChange={handleChange} required='true' />
              </FloatingLabel>

              <Button onClick={postData} style={{marginTop:'20px', width:'120px'}}variant='primary'> Submit </Button>
           </Form>
           </div>
       </div>
      </div>
        
    </div>
   
  </>
  )

}

export default Contact;