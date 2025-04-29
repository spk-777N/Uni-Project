import React, { useContext, useEffect, useState, useRef } from 'react';
import './DoctorProfile.css';
import { DoctorContext } from '../../../context/DoctorContext';
import { AppContext } from "../../../context/AppContext";
import axios from 'axios';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { doctors } from "../../../assets/assets_frontend/assets";

const DoctorProfile = () => {
    const [profile, setProfile] = useState({
        image: doctors[0].image,
        name: 'John Doe',
        email: 'john.doe@example.com',
        specialty: 'Cardiologist',
        experience: '10 years',
        address: '123 Health St',
        location: 'New York, NY',
        fees: '200',
        about: 'Experienced cardiologist with a passion for patient care.',
        workDays: ["Sunday", "Monday", "Saturday"],
        startTime: '14:00',
        endTime: '16:00',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...profile });
    const [newImage, setNewImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        if (isEditing && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            setFormData({ ...profile });
            setNewImage(null);
        }
    };

    const handleWorkDaysChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        setFormData({ ...formData, workDays: selectedOptions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = new FormData();
            dataToSend.append('name', formData.name);
            dataToSend.append('email', formData.email);
            dataToSend.append('specialty', formData.specialty);
            dataToSend.append('experience', formData.experience);
            dataToSend.append('address', formData.address);
            dataToSend.append('location', formData.location);
            dataToSend.append('fees', formData.fees);
            dataToSend.append('about', formData.about);
            dataToSend.append('workDays', JSON.stringify(formData.workDays));
            dataToSend.append('startTime', formData.startTime);
            dataToSend.append('endTime', formData.endTime);
            if (newImage) {
                dataToSend.append('image', newImage);
            }

            const response = await axios.put('/api/profile', dataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setProfile({
                    ...formData,
                    image: newImage ? formData.image : profile.image,
                });
                setIsEditing(false);
                toast.success('Profile updated successfully!');
            } else {
                toast.error('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('An error occurred while updating the profile.');
        }
    };

    return (
        <div className="profile-container">
            {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                    <img
                        src={formData.image}
                        alt="Profile Preview"
                        className="profile-image preview"
                        onClick={handleImageClick}
                    />
                    <div className='form-details'>
                        <div className='form-left-side'>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                            <label className='field-name'>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='field-name'>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='field-name'>Specialty:</label>
                            <input
                                type="text"
                                name="specialty"
                                value={formData.specialty}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='field-name'>Experience:</label>
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                required
                                className='experience-list'
                            >
                                {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={`${i + 1} Year`}>
                                        {i + 1} {i === 0 ? "Year" : "Years"}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='form-right-side'>
                            <label className='field-name'>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='field-name'>Location:</label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                                className='form-location'
                            >
                                {/* Add your location options here */}
                            </select>

                            <label className='field-name'>Fees:</label>
                            <input
                                type="number"
                                name="fees"
                                value={formData.fees}
                                onChange={handleInputChange}
                                required
                                className='form-fees'
                            />
                        </div>
                        <hr />
                        <div className='edit-work-times'>
                            {/* Updated Work Days Section */}
                            <label className='field-name'>Work Days:</label>
                            <select
                                name="workDays"
                                multiple
                                value={formData.workDays}
                                onChange={handleWorkDaysChange}
                                className='form-workdays-select'
                                size={7} // Show all days at once
                            >
                                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                ))}
                            </select>

                            <label className='field-name'>Start Time:</label>
                            <input
                                type="time"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='field-name'>End Time:</label>
                            <input
                                type="time"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='form-about'>
                        <label className='field-name'>About:</label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    <div className="save-info-button">
                        <Button variant="contained" type="submit">
                            Save information
                        </Button>
                        <Button variant="outlined" onClick={handleEditToggle}>
                            Cancel
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="profile-display">
                    <img className="profile-image" src={profile.image} alt="Profile" />
                    <p className='doc-name'>{profile.name}</p>

                    <div className='details-div'>
                        <div className='left-side'>
                            <p><span className='field-name'>Email:</span> {profile.email}</p>
                            <p><span className='field-name'>Specialty:</span> {profile.specialty}</p>
                            <p><span className='field-name'>Experience:</span> {profile.experience}</p>
                        </div>
                        <div className='right-side'>
                            <p><span className='field-name'>Address:</span> {profile.address}</p>
                            <p><span className='field-name'>Location:</span> {profile.location}</p>
                            <p><span className='field-name'>Fees:</span> {profile.fees}</p>
                        </div>
                        <hr />
                        <div className='doctor-appointments'>
                            <p><span className='field-name'>Work Days:</span> {profile.workDays.join(', ')}</p>
                            <p><span className='field-name'>Start Time:</span> {profile.startTime}</p>
                            <p><span className='field-name'>End Time:</span> {profile.endTime}</p>
                        </div>
                    </div>

                    <div>
                        <p className='about-field-name'><span className='field-name'>About:</span> <br /> {profile.about}</p>
                    </div>

                    <div className="edit-button">
                        <Button variant="contained" onClick={handleEditToggle}>
                            Edit
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorProfile;
