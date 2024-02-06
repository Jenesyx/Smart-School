import React from 'react'
import './User.css'

function User(props) {
  return (
    <div className='single-user'>
      <div className='user-infos'>
        <p>{props.Vorname}</p>
        <p>{props.Nachname}</p>
      </div>
      <div className='buttons-holder'>
        <div className="come">Come</div>
        <div className="go">Go</div>
      </div>
    </div>
  )
}

export default User