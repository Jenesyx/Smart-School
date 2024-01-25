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
                <div className="dashboard msame">
                    <img src={Home} alt="" />
                    <p>Dashboard</p>
                </div>
               <div class="onlyadmin">
                    <div className="dailyreport msame">
                        <img src={Home} alt="" />
                        <p>Daily Report</p>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default SideBar