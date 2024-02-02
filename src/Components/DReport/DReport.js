import React from 'react'
import chevronRight from '../../Images/chevron-right.png'
import chevronLeft from '../../Images/chevron-left.png'
import './DReport.css'

function DReport(props) {
    const { date, dataMain, onDateChange, getDateYesterday, getDateTomorrow, mainUsername, isAdmin } = props;

    const filteredData = isAdmin ? dataMain : dataMain.filter(item => item.Nachname === mainUsername);

    return (
        <>
            <div className="daily-holder">
                <div className="daily">
                    <div className="title">
                        <p>Daily Report</p>
                    </div>
                    <div className='date'>
                        <div className='chevron' onClick={() => onDateChange(getDateYesterday())}>
                            <img src={chevronLeft} alt="left" />
                        </div>
                        <p>{date && date.toLocaleDateString()}</p>
                        <div className='chevron'>
                            <img src={chevronRight} alt="right" onClick={() => onDateChange(getDateTomorrow())} />
                        </div>
                    </div>
                    <div className="user-titles">
                        <ul>
                            <li>Username</li>
                            <li>Begin at</li>
                            <li>Finish at</li>
                        </ul>
                    </div>
                    <div className="users-daily">
                            <div className={`noBodyHome ${dataMain == '' ? 'highlight' : ''}`}>NOTHING</div>
                            {filteredData.map((item) => (
                                <ul key={item.Schueler_ID}>
                                    <li>{item.Vorname} {item.Nachname}</li>
                                    <li>{item.Ankunftszeit}</li>
                                    <li>{item.Gangzeit}</li>
                                </ul>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DReport