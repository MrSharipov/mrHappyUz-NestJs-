import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        
  return (
    <>
      {items.map((item)=>(
          <div className='card' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
    </>
  )
}

export default AllPortfolioItems