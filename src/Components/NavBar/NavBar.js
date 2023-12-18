import React from 'react'
import './NavBar.css'

function NavBar(props) {
  return (
    <>
        <div className='nav-holder'>
            <div className='nav'>
                <div className="user">
                    <p>User : {props.mainUsername}</p>
                </div>
                <div className="welcome">
                    <p className='nav-mobile'>Hello Admin</p>
                    <div className='welcometitle'>
                        <p>Welcome to your Vision</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar