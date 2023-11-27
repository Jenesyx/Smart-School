import React from 'react'
import './SideBar.css'
import Home from '../../Images/Home.png'

function SideBar() {
  return (
    <>
        <div className='sidebar'>
            <div className='header'>
                <h2>Pro EduPage</h2>
            </div>
            <div className='menu'>
                <div className="dashboard">
                    <img src={Home} alt="" />
                    <p>Dashboard</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar

// Designed & Developed with <3 and C@f3 by AliJenesyx