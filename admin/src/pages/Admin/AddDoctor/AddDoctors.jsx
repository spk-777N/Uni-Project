import React, { useContext, useState } from 'react'
import { assets } from '../../../assets/assets'
import './AddDoctors.css'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'
// import { AdminContext } from '../../../context/AdminContext'

const AddDoctors = () => {



  const [docImg, setDocImg] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [experience, setExperience] = useState("1 Year")
  const [fees, setFees] = useState("")
  const [about, setAbout] = useState("")
  const [speciality, setSpeciality] = useState("General physician")
  const [degree, setDegree] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")



  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (!docImg) {
        return toast.error('Image Not Selected')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('email', email)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('location', location)
      formData.append('address', address)


      // console log formdata
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      })

      // const { authHeader } = useContext(AdminContext)   , formData, { headers: { authHeader } }
      const { data } = await axios.post('http://localhost:3000/admin/doctors/addDoctor')

      if (data.success) {
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
    }

  }


  return (
    // <form action='add-doctor' method='post'>
    <form onSubmit={onSubmitHandler}>
      <p className='title-p'>Add Doctor</p>

      <div className='add-doctor-div'>
        <div className='doc-img-div'>
          <label htmlFor='doc-img'>
            <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt='...' />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type='file' id='doc-img' hidden />
          <p>Upload doctor <br />picture</p>
        </div>
        <div className='main-section'>
          <div className='left-section'>

            <div className='data-field'>
              <p>First Name</p>
              <input onChange={(e) => setFirstName(e.target.value)} value={firstName} name='firstName' type='text' placeholder='First Name' required />
            </div>

            <div className='data-field'>
              <p>Last Name</p>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} name='lastName' type='text' placeholder='Last Name' required />
            </div>

            <div className='data-field'>
              <p>Docter Email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} name='email' type='email' placeholder='Email' required />
            </div>



            <div className='data-field'>
              <p>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} name='experience'>
                <option value='1 Year'>1 Year</option>
                <option value='2 Year'>2 Year</option>
                <option value='3 Year'>3 Year</option>
                <option value='4 Year'>4 Year</option>
                <option value='5 Year'>5 Year</option>
                <option value='6 Year'>6 Year</option>
                <option value='7 Year'>7 Year</option>
                <option value='8 Year'>8 Year</option>
                <option value='9 Year'>9 Year</option>
                <option value='10 Year'>10 Year</option>
              </select>
            </div>

            <div className='data-field'>
              <p>Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} name='fees' type='number' placeholder='fees' required />
            </div>
          </div>

          <div className='right-section'>
            <div className='data-field'>
              <p>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} name='speciality'>
                <option value='General physician'>General physician</option>
                <option value='Gynecologist'>Gynecologist</option>
                <option value='Dermatologist'>Dermatologist</option>
                <option value='Pediatricians'>Pediatricians</option>
                <option value='Neurologist'>Neurologist</option>
                <option value='Gastroenterologist'>Gastroenterologist</option>
              </select>
            </div>

            <div className='data-field'>
              <p>Education</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} name='education' type='text' placeholder='Education' required />
            </div>

            <div className='data-field'>
              <p>Location</p>
              <select onChange={(e) => setLocation(e.target.value)} value={location} name='location'>
                <option value='Cairo'>Cairo</option>
                <option value='Giza'>Giza</option>
                <option value='Alexandria'>Alexandria</option>
                <option value='Qalyubia'>Qalyubia</option>
                <option value='Menoufia'>Menoufia</option>
                <option value='Beheira'>Beheira</option>
                <option value='Kafr El Sheikh'>Kafr El Sheikh</option>
                <option value='Sharqia'>Sharqia</option>
                <option value='Dakahlia'>Dakahlia</option>
                <option value='Damietta'>Damietta</option>
                <option value='Port Said'>Port Said</option>
                <option value='Ismailia'>Ismailia</option>
                <option value='Suez'>Suez</option>
                <option value='Fayoum'>Fayoum</option>
                <option value='Beni Suef'>Beni Suef</option>
                <option value='Minya'>Minya</option>
                <option value='Asyut'>Asyut</option>
                <option value='Sohag'>Sohag</option>
                <option value='Qena'>Qena</option>
                <option value='Luxor'>Luxor</option>
                <option value='Aswan'>Aswan</option>
                <option value='Al-Bahr Al-Ahmar'>Al-Bahr Al-Ahmar</option>
                <option value='Al-Wadi Al-Jadid'>Al-Wadi Al-Jadid</option>
                <option value='Matrouh'>Matrouh</option>
                <option value="Shamal Sina'">Shamal Sina'</option>
                <option value="Janub  Sina'">Janub  Sina'</option>
                <option value='Gharbia '>Gharbia</option>
              </select>
            </div>

            <div className='data-field address'>
              <p>Address</p>
              <div>
                <input onChange={(e) => setAddress(e.target.value)} value={address} name='address' type='text' placeholder='Address' required />
              </div>
            </div>

          </div>

        </div>

        <div className='data-field textarea'>
          <p>About Docter</p>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} name='description' placeholder='write aboute docter' required />
        </div>
        <div className='add-doc'>
          <Button type='submit' className='add-doc' variant="contained">Add doctor</Button>
        </div>

      </div>
    </form>
  )
}

export default AddDoctors
