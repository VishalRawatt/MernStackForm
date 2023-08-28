import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Registorpage() {

const [sv,sf]=useState({
    fullname:"",
    email:"",
    phone:"",
    gender:"",
    comment:""
})

const setdata = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        sf((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
    }

const submitdata = async (e) => {
    e.preventDefault();
    if (sv.fullname === "" || sv.email === "" || sv.comment === "" || sv.phone === "") {
        alert("enter Dara");
    }
    else {
        const { fullname, email, phone, comment, gender } = sv;
        const res = await fetch("http://localhost:7800/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullname, email, phone, comment, gender
            })
        })
        const data = await res.json();
        console.log(data);

    }
}

    return (
        <Fragment>
            <form>
            <div className='container shadow p-5 user-width mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>User Registor Page</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 mt-2'>
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder='fullname' name="fullname" onChange={setdata}/>
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label className="form-label">Email id</label>
                        <input type="text" className="form-control" placeholder='emailid' name="email" onChange={setdata} required/>
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label className="form-label">Phone No</label>
                        <input type="text" className="form-control" placeholder='phone no' name="phone" onChange={setdata} required/>
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label className="form-label">Gender</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="male" name='gender' onChange={setdata}/>
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="female" name='gender' onChange={setdata} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2'>
                        <label className="form-label">Commets type</label>
                        <textarea className='form-control' placeholder='type comment...' name='comment' onChange={setdata} required></textarea>
                    </div>
                    <div className='col-md-12 mt-2 text-center'>
                        <button type="button" className='btn btn-primary' onClick={submitdata}>Registor Now</button>
                        <button className='btn btn-danger ms-2'>Reset</button>
                        <Link to="/">login page</Link>
                    </div>
                </div>
            </div>
            </form>
        </Fragment>
    )
}

export default Registorpage