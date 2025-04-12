import { React, useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Button } from '@mui/material'
// import { axios } from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
import './MyAppointments.css'



const MyAppointments = () => {


    const { doctors, authHeader } = useContext(AppContext)

    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([])         //change the doctors in mapping array and add appointments

    // get user Appointments
    const getUserAppointments = async () => {

        try {
            const response = await axios.get('backendUrl', { headers: { 'Authorization': `${authHeader}` } });
            const { data } = response
            if (data.success) {
                setAppointments(data.appointments);
                console.log(data.appointments);
            }
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }


    const cancelAppointment = async (appointmenId) => {
        try {

            const response = await axios.post("backendUrl", { appointmenId }, { headers: { 'Authorization': `${authHeader}` } });
            const { data } = response
            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }



    useEffect(() => {
        if (authHeader) {
            getUserAppointments()
        }
    })


    return (

        <div className='my-appointments-main-div'>
            <p className='my-appointemnts-title'>My Appointments</p>
            <div className='doc-appointment-card-details'>
                {doctors.slice(0, 222).map((item, index) => (
                    <div className='doc-appointment-details' key={index}>

                        <div className='doc-image'>
                            <img src={assets.doc1} alt="..." />
                        </div>
                        <div className='details-buttons'>
                            <div className='doc-appointment-card-details'>
                                <p className='doc-appointment-name'>{item.name}</p>
                                <p className='doc-appointment-speciality'>{item.speciality}</p>
                                <p className='doc-appointment-address-p'>Address:</p>
                                <p className='doc-appointment-address'>{item.address.line1}</p>
                                <p className='doc-appointment-time'><span>Date & Time:</span>25, July, 2024 | 8:30 PM</p>
                            </div>

                            {/* <div className='Pay-cancel-buttons'>
                                {item.cancelled && item.payment && !item.isCompleted && <Button onClick={() => navigate("/my-appointments") className='pay-button' variant="contained" >Paid</Button> }
                                {item.cancelled && !item.isCompleted && <Button className='pay-button' variant="contained" type="submit">Pay Online</Button>}
                                {!item.cancelled && !item.isCompleted && <Button onClick={() => cancelAppointment(item._id)} className='cancel-button' variant="contained" type="submit">Cancel appointment</Button>}
                                {item.cancelled && !item.isCompleted && <Button className='pay-button' variant="contained" type="submit">Appointment cancelled</Button>}
                                {item.isCompleted && <Button className='pay-button' variant="contained" type="submit">Appointment cancelled</Button>}
                            </div> */}

                            <div className='Pay-cancel-buttons'>
                                <Button onClick={() => cancelAppointment(item._id)} className='cancel-button' variant="contained" type="submit">Cancel appointment</Button>
                                <Button className='pay-button' variant="contained" type="submit">Appointment cancelled</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments
