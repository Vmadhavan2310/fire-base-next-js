import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/InputForm.css'

export default function NavBar() {
  return (
    <div>
        <Link to='/'></Link>
        <Link to='signup'>signup</Link>
        <Link to='homepage'>homepage</Link>
        <Link to='mblOTP'>mblOTP</Link>
        
    </div>
  )
}
