import React from 'react'
import './Status.css'

function Status(props) {
    const { dataMain, dataCount } = props;
    
    let i = 0
    let mainpercentage = 0
    
    dataMain.map((item) => {
        if(item.Gangzeit == '' && item.Ankunftszeit != ''){
            i+=1
        }
    })

    dataCount.map((item) => {
        mainpercentage = (i / item.Schueler) * 100
    })

    return (
        <>
            <div className="status-holder">
                <div className="status">
                    <div className='title'>
                        <p>Status</p>
                    </div>
                    <div className="user-status">
                        <div className="status-number">
                            <div className="total-users">
                                <p className='h4'>Total</p>
                                {dataCount.map((item) => (
                                <p>{item.Schueler}</p>
                                ))}
                            </div>                                                                                                          
                            <div className='present-users'>
                                <p className='h4'>Present</p><p>{i}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status