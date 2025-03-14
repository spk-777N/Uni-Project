import React, { useContext, useEffect, useState } from 'react'
import './DoctorsList.css'
import { AdminContext } from '../../../context/AdminContext'
import { assets } from '../../../../../frontend/src/assets/assets'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'


const DoctorsList = () => {

    const { doctors, getAllDoctors, auth_header, changeAvailability } = useContext(AdminContext)

    useEffect(() => {
        if (auth_header) {
            getAllDoctors()
        }
    }, [auth_header])

    return (
        <div className='doctors-list-main-div'>
            <p className='doctors-list-title'>All Doctors</p>
            <div className='doctors-list-div'>
                {
                    doctors.map((item, index) => {
                        <div className='doctor-card' key={index}>
                            <img src={item.image} alt='...' />
                            <div className='doc-name-speciality'>
                                <p className='doc-name'>{item.name}</p>
                                <p className='doc-speciality'>{item.speciality}</p>
                                <div className='availabe-div'>
                                    <input onChange={() => changeAvailability(item._id)} id='Available' type='checkbox' checked={item.available} />
                                    <label htmlFor='Available'>Available</label>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div><div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
                <div className='doctor-card'>
                    <img src={assets.doc1} />
                    <div className='doc-name-speciality'>
                        <p className='doc-name'>Nazeer Mohamed</p>
                        <p className='doc-speciality'>General physician</p>
                        <div className='availabe-div'>
                            <input id='Available' type='checkbox' />
                            <label htmlFor='Available'>Available</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DoctorsList
