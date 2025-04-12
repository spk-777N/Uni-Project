import React, { useContext, useEffect, useState, useCallback } from 'react';
import { assets } from '../../assets/assets';
import './MyProfile.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const MyProfile = () => {
    const { authHeader } = useContext(AppContext);
    const [userInfo, setUserInfo] = useState(null);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        image: assets.profile_pic, // الصورة ثابتة
        email: '',
        phone: '',
        address: '',
        gender: '',
        dob: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const [error, setError] = useState(null);

    // جلب بيانات المستخدم
    const getUserData = useCallback(async () => {
        if (!authHeader) return;
        try {
            setError(null);
            const response = await axios.get('http://localhost:3000/user/profile', {
                headers: { Authorization: authHeader },
            });
            console.log(response.data.user)
            const { data } = response;
            if (data.message === 'success') {
                setUserInfo(data.user);
                setUserData({
                    firstName: data.user.firstName || '',
                    lastName: data.user.lastName || '',
                    image: assets.profile_pic, // الصورة ثابتة
                    email: data.user.email || '',
                    phone: data.user.phone || '',
                    userName: data.user.userName || '',
                    gender: data.user.gender || '',
                    dob: data.user.dob || '',
                });
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    }, [authHeader]);

    useEffect(() => {
        getUserData();
    }, [getUserData]);

    // حفظ بيانات المستخدم
    const saveUserData = async () => {
        try {
            const response = await axios.put(
                'http://localhost:3000/user/profile',
                {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    phone: userData.phone,
                    userName: userData.userName,
                    gender: userData.gender,
                    dob: userData.dob,
                },
                { headers: { Authorization: authHeader } }
            );
            if (response.data.message === 'success') {
                setUserInfo(response.data.user);
                setIsEdit(false);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to save data');
        }
    };

    // إذا لم تتوفر بيانات المستخدم بعد
    if (!userInfo && !error) {
        return null; // لا نعرض شيئًا حتى يتم جلب البيانات
    }

    // إذا حدث خطأ
    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="myprofile-main-div">
            <img src={userData.image} alt="Profile" />
            {isEdit ? (
                <div className="user-name-input-div">
                    <input
                        className="user-name-input"
                        placeholder="First Name"
                        type="text"
                        value={userData.firstName}
                        onChange={e => setUserData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                    <input
                        className="user-name-input"
                        placeholder="Last Name"
                        type="text"
                        value={userData.lastName}
                        onChange={e => setUserData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                    <hr />
                </div>
            ) : (
                <div>
                    <p className="user-name">
                        {userData.firstName} {userData.lastName}
                    </p>
                    <hr />
                </div>
            )}
            <div className="user-details">
                <p className="contact-info">CONTACT INFORMATION</p>
                <div>
                    <div className="user-email-div">
                        <p>Email id:</p>
                        <p className="user-email">{userData.email}</p>
                    </div>
                    {/* <div className="user-phone-div">
                        <p>Phone:</p>
                        {isEdit ? (
                            <input
                                type="text"
                                value={userData.phone}
                                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                        ) : (
                            <p className="user-phone">{userData.phone}</p>
                        )}
                    </div> */}
                    <div className="user-address-div">
                        <p>Username:</p>
                        {isEdit ? (
                            <input
                                type="text"
                                value={userData.userName}
                                onChange={e => setUserData(prev => ({ ...prev, userName: e.target.value }))}
                            />
                        ) : (
                            <p>{userData.userName}</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <p className="basic-info">BASIC INFORMATION</p>
                <div>
                    <div className="user-gender-div">
                        <p>Gender:</p>
                        {isEdit ? (
                            <select
                                value={userData.gender}
                                onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        ) : (
                            <p>{userData.gender}</p>
                        )}
                    </div>
                    <div className="user-birthday-div">
                        <p>Birthday:</p>
                        {isEdit ? (
                            <input
                                type="date"
                                value={userData.dob}
                                onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                            />
                        ) : (
                            <p>{userData.dob}</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {isEdit ? (
                    <div className="save-info-button">
                        <Button variant="contained" onClick={saveUserData}>
                            Save information
                        </Button>
                        <Button variant="outlined" onClick={() => setIsEdit(false)}>
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div className="edit-button">
                        <Button variant="contained" onClick={() => setIsEdit(true)}>
                            Edit
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfile;