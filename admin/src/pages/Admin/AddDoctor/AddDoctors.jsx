import React from 'react'
import { assets } from '../../../assets/assets'
import './AddDoctors.css'
import { Button } from '@mui/material'

const AddDoctors = () => {
  return (
    <form>
      <p className='title-p'>Add Doctor</p>

      <div className='add-doctor-div'>
        <div className='doc-img-div'>
          <label htmlFor='doc-img'>
            <img src={assets.upload_area} alt='...' />
          </label>
          <input type='file' id='doc-img' hidden />
          <p>Upload doctor <br />picture</p>
        </div>
        <div className='main-section'>
          <div className='left-section'>

            <div className='data-field'>
              <p>Docter Name</p>
              <input type='text' placeholder='Name' required />
            </div>

            <div className='data-field'>
              <p>Docter Email</p>
              <input type='email' placeholder='Email' required />
            </div>

            <div className='data-field'>
              <p>Docter Password</p>
              <input type='password' placeholder='Password' required />
            </div>

            <div className='data-field'>
              <p>Experience</p>
              <select>
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
              <input type='number' placeholder='fees' required />
            </div>
          </div>

          <div className='right-section'>
            <div className='data-field'>
              <p>Speciality</p>
              <select>
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
              <input type='text' placeholder='Education' required />
            </div>

            <div className='data-field address'>
              <p>Address</p>
              <div>
                <input type='text' placeholder='Address 1' required />
                <input type='text' placeholder='Address 2' required />
              </div>
            </div>

          </div>

        </div>

        <div className='data-field textarea'>
          <p>About Docter</p>
          <textarea placeholder='write aboute docter' required />
        </div>
        <div className='add-doc'>
          <Button className='add-doc' variant="contained">Add doctor</Button>
        </div>

      </div>
    </form>
  )
}

export default AddDoctors
