import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers On Your EMAIL</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter