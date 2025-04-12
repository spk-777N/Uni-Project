import React, { Profiler, useContext, useEffect, useState } from 'react'
import './DoctorProfile.css'
import { DoctorContext } from '../../../context/DoctorContext'
import { AppContext } from "../../../context/AppContext"
import axios from 'axios'
import { toast } from 'react-toastify'

const DoctorProfile = () => {



    const { profileData, setProfileData, getProfileData, authToken, backendUrl } = useContext(DoctorContext)
    const { currnecy } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {

        try {

            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                availale: profileData.availale,
            }

            const { data } = await axios.post(backendUrl + "endpoint", updateData, { headers: { authToken } })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    // useEffect(() => {
    //     if (authToken) {
    //         getProfileData()
    //     }
    // }, [authToken])


    // profileData &&
    return (
        <div>
            <div>
                <div>
                    <image src={profileData.image} />

                    <div>
                        {/* doctor info */}

                        <p>{profileData.name}</p>
                    </div>
                    <p>{profileData.speciality}</p>
                    <button>{profileData.experience}</button>
                </div>
                {/* docter about */}
                <div>
                    <p>About:</p>
                    <p>
                        {profileData.about}
                    </p>
                </div>
                <p>
                    Appointment fee: <span>{currnecy} {isEdit ? <input type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span>
                </p>
                <div>
                    <p>Address:</p>
                    <p>
                        {isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))} value={profileData.address} /> : profileData.address}
                    </p>
                </div>
                <div>
                    <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, availale: !prev.availale }))} checked={profileData.availale} type='checkbox' name='' id='' />
                    <label htmlFor=''>Available</label>
                </div>
                {
                    isEdit
                        ? <Button onClick={updateProfile()} variant="contained">Save</Button>
                        : <Button onClick={() => setIsEdit(true)} variant="contained">Edit</Button>
                }
            </div>
        </div>
    )
}

export default DoctorProfile
