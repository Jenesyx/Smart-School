import React, { useState } from 'react'
import './SideBar.css'
import Home from '../../Images/Home.png'
import users from '../../Images/users.png'
import circle from '../../Images/circle.png'
import chevDown from '../../Images/chevron-down.png'


function SideBar({showAdminPerms = true}) {

    const [show, setShow] = useState(false)

    const clickToShow = () => {
        setShow(!show)
    }
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
               {showAdminPerms && (
                    <div class="onlyadmin">
                        <div class="manage-holder">
                            <p className='manageTxt'>MANAGE</p>
                        </div>
                        <div className="Users msame msamea" onClick={clickToShow}>
                            <img src={users} alt="" />
                            <p>Users</p>
                            <img src={chevDown} alt="Arrow Down" className={`${show ? 'show' : ''}`}/>
                        </div>
                        <div className={`View msamea msame dropdown ${show ? 'show' : ''}`}>
                            <img src={circle} alt="" />
                            <p>View</p>
                        </div>
                        <div className={`Board msamea msame dropdown ${show ? 'show' : ''}`}>
                            <img src={circle} alt="" />
                            <p>Board</p>
                        </div>
                </div>
               )}
            </div>
        </div>
    </>
  )
}

export default SideBar