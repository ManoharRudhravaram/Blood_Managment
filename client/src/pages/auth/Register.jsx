import React from 'react'
import Form from '../../component/shared/Form'
import blood1 from '../../assets/blood1.jpg'
export default function Register() {
  return (
    <div className="row g-0">
    <div className="col-md-5 d-flex align-items-center" >
        <img src={blood1} alt="blood_bank_login" className='img-fluid login-image' />
    </div>
    <div className="col-md-6 form-container">
        <Form submitText="Register" formTitle="Register" formType="register" />
    </div>
</div>
  )
}
