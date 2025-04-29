import { React, useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../../context/DoctorContext'
import { assets } from '../../../assets/assets'
import axios from 'axios'
import './DoctorAppointments.css'

const DoctorAppointments = () => {
    const [patients, setPatients] = useState([
        {
            id: "1",
            name: "John Doe",
            payment: "Paid",
            age: 34,
            dateTime: "2025-04-10 09:00",
            fees: 150,
            status: "Pending"
        },
        {
            id: "2",
            name: "Jane Smith",
            payment: "Pending",
            age: 28,
            dateTime: "2025-04-11 14:30",
            fees: 200,
            status: "Pending"
        },
        {
            id: "3",
            name: "Alice Johnson",
            payment: "Paid",
            age: 45,
            dateTime: "2025-04-12 11:15",
            fees: 180,
            status: "Pending"
        },
        {
            id: "4",
            name: "Bob Wilson",
            payment: "Overdue",
            age: 60,
            dateTime: "2025-04-13 16:45",
            fees: 250,
            status: "Pending"
        },
        {
            id: "5",
            name: "Emma Brown",
            payment: "Paid",
            age: 19,
            dateTime: "2025-04-14 08:20",
            fees: 120,
            status: "Pending"
        }
    ]);

    const handleComplete = async (index) => {
        try {
            const appointmentId = patients[index].id;
            const response = await axios.post('/api/complete-appointment', { id: appointmentId });
            if (response.data.success) {
                setPatients(prevPatients => {
                    const updatedPatients = [...prevPatients];
                    updatedPatients[index] = { ...updatedPatients[index], status: "Completed" };
                    return updatedPatients;
                });
            }
        } catch (error) {
            console.error('Error completing appointment:', error);
            // Optionally show error message to user
        }
    };

    const handleCancel = async (index) => {
        try {
            const appointmentId = patients[index].id;
            const response = await axios.post('/api/cancel-appointment', { id: appointmentId });
            if (response.data.success) {
                setPatients(prevPatients => {
                    const updatedPatients = [...prevPatients];
                    updatedPatients[index] = { ...updatedPatients[index], status: "Cancelled" };
                    return updatedPatients;
                });
            }
        } catch (error) {
            console.error('Error cancelling appointment:', error);
            // Optionally show error message to user
        }
    };

    return (
        <div>
            <p className='title-p'>All Appointments</p>
            <div className="all-appointments-section">
                <div className='doctor-appointments-div'>
                    <div className='key-div'>
                        <p>#</p>
                        <p>Patient</p>
                        <p>Payment</p>
                        <p>Age</p>
                        <p>Date & Time</p>
                        <p>Fees</p>
                        <p>Action</p>
                    </div>
                    {
                        patients.map((item, index) => (
                            <div key={item.id} className='appointment-row'>
                                <p>{index + 1}</p>
                                <p>{item.name}</p>
                                <p>{item.payment}</p>
                                <p>{item.age}</p>
                                <p>{item.dateTime}</p>
                                <p>${item.fees}</p>
                                <p>
                                    {item.status === "Pending" ? (
                                        <div className="cancel-complete-btn">
                                            <button
                                                className="complete-btn"
                                                onClick={() => handleComplete(index)}
                                            >
                                                Complete
                                            </button>
                                            <button
                                                className="cancel-btn"
                                                onClick={() => handleCancel(index)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <span>
                                            {item.status}
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DoctorAppointments