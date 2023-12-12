import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar(props) {

  return (
    <>
        <div className='nav-holder'>
            <div className='nav'>
                <div className="user">
                    <p>User : {props.hello}</p>
                </div>
                <div className="welcome">
                    <p className='nav-mobile'>Hello Admin</p>
                    <p>Welcome to your Vision</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar