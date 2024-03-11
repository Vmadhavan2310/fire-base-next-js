'use client';
import React, { useEffect, useState } from 'react'
import '../Styles/InputForm.css'
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import EnchanedComp from '../Components/EnchanedComp'

 function InputForm(props) {
    const navigate=useNavigate()
    const {disp,signIn,googleSignIn,pwdReset}=props

    const initialValues={
        uname:'',
        pwd:'',
    }
    
    const onSubmit=(e)=>{
      e.preventDefault()
        signIn(formik.values.uname,formik.values.pwd)
    } 

   const formik= useFormik({
    initialValues,
    onSubmit,
    })

    const reset=(e)=>{
      e.preventDefault()
      pwdReset(formik.values.uname)
    }
    useEffect(() => {
      /* window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
        window.history.go(1);
      }; */
    }, [])

  return (
    <div>
        <div className="login-box">
  <h2>Login</h2>
  <h5 ><a onClick={()=>navigate('signup')} style={{textDecoration:'none',color:'yellow',cursor:'pointer'}}>Don't have an account? Sign Up</a></h5>
  <h5><a onClick={()=>googleSignIn()} style={{textDecoration:'none',color:'yellow',cursor:'pointer'}}>Or Sign In with Google Account</a></h5>

  <form>
    <div className="user-box">
      <input type="text" name="uname" onChange={formik.handleChange} value={formik.values.uname}/>
      <label htmlFor='uname'>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="pwd" onChange={formik.handleChange} value={formik.values.pwd}/>
      <label htmlFor='pwd'>Password</label>
    </div>
    <h5 onClick={reset} style={{cursor:'pointer'}}>Forget Password</h5>
    {(disp.msg&&!disp.status)&&<h6 style={{color:'red'}}>{disp.msg}</h6>}
    <a style={{position:'relative',left:'100px',color:'white',zIndex:'500',cursor:'pointer'}} type='submit' role='button' onClick={onSubmit}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    
  </form>
</div>
    </div>
  )
}

export default EnchanedComp(InputForm)
