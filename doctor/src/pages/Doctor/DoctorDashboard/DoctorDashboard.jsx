import { React, useContext, useEffect } from 'react'
import './DoctorDashboard.css'
import { DoctorContext } from '../../../context/DoctorContext'
import { assets } from "../../../assets/assets"

const DoctorDashboard = () => {

    const { dashData, setDashData, getDashData, authToken } = useContext(DoctorContext)


    // useEffect(() => {
    //     getDashData()
    // }, [authToken])


    return dashData && (
        <div>
            <div>
                <div>
                    <Image src={assets.earning_icon} alt="..." />
                    <div>
                        <p>{dashData.doctos}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard
