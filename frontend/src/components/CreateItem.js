import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = () => {
    const url = "http://localhost:3003/portfolio";
    const [data, setData] = useState({
        title: '',
        desc: '',
        imgLink: ''
    });

    function submitData(e){
        e.preventDefault();
        axios.post(url, {
            title: data.title,
            desc: data.desc,
            img: data.imgLink
        })
        .then(res => {
            console.log(res.data);
           window.location.replace('http://localhost:3000');
            
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
    <h1>Create portfolio Item</h1>
    <form onSubmit={submitData}>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' onChange={handleChange} />

        <label htmlFor="desc">Desc</label>
        <input type="text" id='desc' onChange={handleChange} />

        <label htmlFor="imgLink">Img</label>           
        <input type="text" id='imgLink' onChange={handleChange} />

        <input type="submit" />
    </form>
    </>
  )
}

export default CreateItem