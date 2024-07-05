import React from 'react'
import Form from '../../component/shared/Form'
import blood2 from '../../assets/blood2.jpg'
export default function Login() {
  return ( <>
    <div className="row g-0">
        <div className="col-md-5">
            <img src={blood2} alt="blood_bank_login" className='img-fluid login-image' />
        </div>
        <div className="col-md-6 form-container">
            <Form role="" submitText="submit" formTitle="Login" formType="login"/>
        </div>
    </div>
</>)
}
