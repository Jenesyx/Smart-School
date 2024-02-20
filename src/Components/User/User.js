import React from 'react'
import './User.css'

function User({ Vorname, Nachname, onComeClick, onGoClick, schuelerId }) {
  return (
    <div className='single-user'>
      <div className='user-infos'>
        <p>{Vorname}</p>
        <p>{Nachname}</p>
      </div>
      <div className='buttons-holder'>
        <div className="come" onClick={() => onComeClick(schuelerId)}>Come</div>
        <div className="go" onClick={() => onGoClick(schuelerId)}>Go</div>
      </div>
    </div>
  )
}

export default User