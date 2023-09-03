import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Mycard() {
    
    const [data, newData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:7800/getdata')
            .then((e) => {
                console.log(e.data);
                newData(e.data);
            })
    }, [])

    const deleteData = async(id)=>{
        await axios.delete(`http://localhost:7800/deletedata/${id}`).then((res)=>{
            console.log(res.data);
        })
    };
    return (
        <Fragment>
            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-12'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                
                                {data.map((d,n=1)=>{
                                    return(
                                    <tr key={d._id}>
                                    <th scope="row">{n+1}</th>
                                    <td>{d._id}</td>
                                    <td>{d.fullname}</td>
                                    <td>{d.email}</td>
                                    <td>{d.gender}</td>
                                    <td>{d.phone}</td>
                                    <td>{d.comment}</td>
                                    <td>
                                        <Link className="btn btn-sm btn-primary me-2" to={`view/${d._id}`}>View</Link>
                                        <button className="btn btn-sm btn-warning me-2">Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={()=>deleteData(d._id)}>Del</button>
                                    </td>
                                </tr>
                                    
                                    )
                                })}
                                
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Mycard