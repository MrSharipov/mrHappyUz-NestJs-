import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllPortfolioItems = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const res = await axios.get("http://localhost:3003/portfolio");
                setItems(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, []);

    const removeItem = async (id) => {
      await axios.delete(`http://localhost:3003/portfolio/${id}`);
      window.location.reload();
    }
        
  return (
    <div className='container'>
      {items.map((item)=>(
          <div className='card' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p>{item.imgLink}</p>
            <button><Link to={`/update/${item.id}`}>Edit</Link></button>
            <button onClick={()=>{removeItem(item.id)}}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default AllPortfolioItems