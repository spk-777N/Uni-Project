import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {


    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // get token from local storage
    const [authHeader, setAuthHeader] = useState(localStorage.getItem('token') || '');


    // get Appointments
    const [appointments, setAppointments] = useState([])
    const getAppointments = async () => {
        try {
            const { data } = axios.get(backendUrl + '/api/link') //, { headers: { authToken }})
            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments.reverse())
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    // doctor dashboard data
    // const [dashData, setDashData] = useState(false)
    // const getDashData = async () => {

    //     try {

    //         const { data } = await axios.get("backendUrl" + "endPoint", { headers: { authToken } })
    //         if (data.success) {
    //             setDashData(data.dashData)
    //             console.log(data.dashData)
    //         } else {
    //             toast.error(data.message)
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         toast.error(error.message)
    //     }
    // }


    // doctor profile data
    //     const [profileData, setProfileData] = useState(false)
    //     const getProfileData = async () => {

    //         try {

    //             const { data } = await axios.get("backendUrl" + "endpoint", { headers: { authToken } })
    //             if (data.success) {
    //                 setProfileData(data.profileData)
    //                 console.log(data.profileData)
    //             }
    //         } else {
    //             toast.error(data.message)
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         toast.error(error.message)
    //     }
    // }


    const value = {
        // authToken, setAuthToken,
        // backendUrl,
        appointments, setAppointments, getAppointments,
        // dashData, setDashData, getDashData,
        // profileData, setProfileData, getProfileData,
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider