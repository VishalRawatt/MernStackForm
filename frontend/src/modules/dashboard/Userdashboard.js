import React, { Fragment } from 'react'
import Navbarpage from '../shares/Navbarpage'
import Mycard from './Mycard'

function Userdashboard() {
    let a = 50;
    return (
        <Fragment>
        <Navbarpage/>
        <Mycard number={a}></Mycard>
        </Fragment>
    )
}

export default Userdashboard