import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Button } from '@mui/material'
import './MyAppointments.css'



const MyAppointments = () => {

    const { doctors } = useContext(AppContext)
    return (

        <div className='my-appointments-main-div'>
            <p className='my-appointemnts-title'>My Appointments</p>
            <div className='doc-appointment-card-details'>
                {doctors.slice(0, 222).map((item, index) => (
                    <div className='doc-appointment-details' key={index}>

                        <div className='doc-image'>
                            <img src={item.image} />
                        </div>
                        <div className='details-buttons'>
                            <div className='doc-appointment-card-details'>
                                <p className='doc-appointment-name'>{item.name}</p>
                                <p className='doc-appointment-speciality'>{item.speciality}</p>
                                <p className='doc-appointment-address-p'>Address:</p>
                                <p className='doc-appointment-address'>{item.address.line1}</p>
                                <p className='doc-appointment-time'><span>Date & Time:</span>25, July, 2024 | 8:30 PM</p>
                            </div>

                            <div className='Pay-cancel-buttons'>
                                <Button className='pay-button' variant="contained" type="submit">Pay Online</Button>
                                <Button className='cancel-button' variant="contained" type="submit">Cancel appointment</Button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
