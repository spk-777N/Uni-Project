import React, { Fragment } from 'react'
import Navbar from '../../components/Nav/Navbar'
import Description from '../../components/Description/Description'
import './Home.css'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Description />
        </Fragment>
    )
}

export default Home
