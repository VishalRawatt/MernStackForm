import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserView() {
    const [data, newData] = useState([]);
    const { id } = useParams();
    console.log(id);

    const singleUser = () => {
        axios.get(`http://localhost:7800/view/${id}`).then((res) => {
            newData(res.data);
        })
    }
    useEffect(() => {
        singleUser();
    }, [])
    return (
        <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h1 class="card-title">{data.fullname}</h1>
                <h5 class="card-title">{data.phone}</h5>
                <h5 class="card-title">{data.gender}</h5>
                <h5 class="card-title">{data.email}</h5>
                <p class="card-text">{data.comment}</p>
            </div>
        </div>
    )
}

export default UserView