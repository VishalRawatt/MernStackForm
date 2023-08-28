import React, { useState , useEffect } from 'react'
import axios from 'axios';

function Mycard(props) {
    const [data , newData] = useState([]) ;
    useEffect(() =>{
        axios.get('http://localhost:7800/getdata')
        .then((e)=>{
            console.log(e.data) ;
            newData(e.data) ;
        })
    },[])
    return (
        <div className='container m-c'>
            <div className='row'>
                
                {data.map((a)=>{
                return(
                    <div className='col-md-3' key={a.id}>
                    <div className="card text-bg-danger mb-3">
                        <div className="card-header">{a.fullname}</div>
                        <div className="card-body">
                            <h5 className="card-title">{a.phone}</h5>
                            <p className="card-text">{a.comment}</p>
                            <h4>{a.gender}</h4>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Mycard