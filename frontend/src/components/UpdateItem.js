import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateItem = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const itemId = location.pathname.split('/')[2];
    const url = "http://localhost:3003/portfolio/";

    const [data, setData] = useState({
        title: '',
        desc: '',
        imgLink: ''
    });

    function updateData(e){
        e.preventDefault();
        axios.put(url+ itemId, data)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
    }

    function handleChange(e) {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
  return (
    <>
    <h1>Update portfolio Item</h1>
    <form onSubmit={updateData}>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' onChange={handleChange} />

        <label htmlFor="desc">Desc</label>
        <input type="text" id='desc' onChange={handleChange} />

        <label htmlFor="imgLink">Img</label>           
        <input type="text" id='imgLink' onChange={handleChange} />

        <button type='submit'>Update</button>
    </form>
    </>
  )
}

export default UpdateItem