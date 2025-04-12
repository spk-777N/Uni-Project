import { React, useContext, useEffect } from 'react'
import { DoctorContext } from '../../../context/DoctorContext'
import { assets } from '../../../assets/assets'
import './DoctorAppointments.css'

const DoctorAppointments = () => {


    const { authToken, appointments, getAppointments } = useContext(DoctorContext)

    // useEffect(() => {
    //     if (authToken) {
    //         getAppointments()
    //     }
    // }, [authToken])

    return (
        <div>
            <p className='title-p'>All Appointments</p>
            <div className='doctor-appointments-div'>
                <hr />
                <div className='key-div'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>
                <hr />

                {
                    appointments.map((item, index) => (
                        <div key={index}>
                            <p>{index + 1}</p>
                            <div>
                                <image src={item.userId.image} alt="..." /> <p>{item.userId.firstName}</p> <p>{item.userId.lasttName}</p>
                            </div>
                            <div>
                                <p>
                                    None
                                </p>
                            </div>
                            <p>{item.userId.age}</p>
                            <p>{item.date}</p>
                            <p>{item.fees}</p>
                            <div>
                                <image src={assets.cancel_icon} alt="..." />
                                <image src={assets.tick_icon} alt="..." />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DoctorAppointments
