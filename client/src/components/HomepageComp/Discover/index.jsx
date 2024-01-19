import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from "axios"
import Card from '../../Card'
const Discover = () => {
    const [data, setData] = useState([])
    async function getData() {
        const res=await axios("http://localhost:8000/")
        setData(res.data)
    }
    useEffect(() => {
      
        getData()
    }, [])
    
  return (
    <section id='discover'>
<div className="header">
    <h4>OUR MENU</h4>
    <h2>Discover Our Exclusive Menu</h2>
</div>
<div className="container">
    <div className="row">
        {
            data && data.map(x=>
                <div className='col-lg-6 col-md-12 col-12 '>
                 <Card {...x}/></div>
                )
        }
      
    </div>
</div>
    </section>
  )
}

export default Discover