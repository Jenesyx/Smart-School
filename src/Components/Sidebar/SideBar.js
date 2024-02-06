import React, { useState } from 'react';
import './SideBar.css';
import Home from '../../Images/Home.png';
import users from '../../Images/users.png';
import circle from '../../Images/circle.png';
import chevDown from '../../Images/chevron-down.png';

function SideBar({ showAdminPerms, setActiveView }) {

    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [hideComp, sethideComp] = useState(false)

    const clickToShow = () => {
        setShow(!show);
    };

    const setActive = (menu) => {
        setActiveMenu(menu);
    };
    

    return (
        <>
            <div className='sidebar'>
                <div className='header'>
                    <h2>Pro EduPage</h2>
                </div>
                <div className='menu'>
                    <div onClick={() => {setActive('dashboard'); setActiveView('Dashboard'); }} className={`dashboard msame ${activeMenu === 'dashboard' ? 'active' : ''}`}>
                        <img src={Home} alt="" />
                        <p>Dashboard</p>
                    </div>
                    {showAdminPerms && (
                        <div className="onlyadmin">
                            <div className="manage-holder">
                                <p className='manageTxt'>MANAGE</p>
                            </div>
                            <div className="Users msame msamea" onClick={clickToShow}>
                                <img src={users} alt="" />
                                <p>Users</p>
                                <img src={chevDown} alt="Arrow Down" className={`${show ? 'show' : ''}`} />
                            </div>
                            <div onClick={() => {setActive('view'); setActiveView('View'); }} className={`View msamea msame dropdown ${show ? 'show' : ''} ${activeMenu === 'view' ? 'active' : ''}`}>
                                <img src={circle} alt="" />
                                <p>View</p>
                            </div>
                            <div onClick={() => {setActive('list'); setActiveView('List'); }} className={`List msamea msame dropdown ${show ? 'show' : ''} ${activeMenu === 'list' ? 'active' : ''}`}>
                                <img src={circle} alt="" />
                                <p>List</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SideBar;
