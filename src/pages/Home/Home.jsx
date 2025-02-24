import React, { Fragment } from 'react'
import Description from '../../components/Description/Description'
import SpecialityMenu from '../../components/SpecialityMenu/SpecialityMenu'
import './Home.css'

const Home = () => {
    return (
        <Fragment>
            <Description />
            <SpecialityMenu />
        </Fragment>
    )
}

export default Home
