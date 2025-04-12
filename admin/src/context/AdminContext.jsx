import { createContext, useState } from "react";
import { toast } from 'react-toastify'
import axios from 'axios'



export const AdminContext = createContext()

const AdminContextProvider = (props) => {



    // authHeader
    const [authHeader, setAuthHeader] = useState(localStorage.getItem('authHeader') ? localStorage.getItem('authHeader') : '')


    // get all doctors function
    const [doctors, setDoctors] = useState([])
    const getAllDoctors = async () => {

        try {

            const { data } = await axios.post('http://localhost:3000/admin/doctors/allDoctors', {}, { headers: { authHeader } });
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }




    // change availability function
    const changeAvailability = async (docId) => {

        try {

            const { data } = await axios.post(backendUrl + '/admin/change-availability', { docId }, { headers: { authHeader } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(error.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    //  All Appointments if will use it
    // const [appointments, setAppointments] = useState([])
    // const getAllAppointments = async () => {
    //     try {
    //         const { data } = await axios.get(backendUrl, { headers: { authHeader } });
    // if (data.success) {
    // setAppointments(data.appointments)
    // } else {
    // toast.error(data.message)
    // }
    //     } catch (error) { 
    // toast.error(error.message)
    //     }
    // }


    // get admin dashboard data and save it
    // const [dashData, setDashData] = useState(false)
    // const getDashData = async () => {
    //     try {

    //         const { data } = await axios.get("backendUrl", { headers: { authHeader } })
    //         const { data } = "test";

    //         if (data.success) {
    //             setDashData(data.dashData)
    //         } else {
    //             toast.error(data.message)
    //         }
    //     }
    // }



    const value = {
        authHeader, setAuthHeader,
        getAllDoctors, doctors,
        changeAvailability,
        // appointments, setAppointments,
        // getAllAppointments,
        // dashData, getDashData
    }


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider