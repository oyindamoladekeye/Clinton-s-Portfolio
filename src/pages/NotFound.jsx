import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/notfound.css"
export default function NotFound() {
  return (
    <div className='not-found'>
      <p className="page">404</p>
      <p className='page'>Page Not Found</p>
      <p className='kindly'>Kindly return to <Link to ="/">Homepage</Link></p>
    </div>
  )
}
