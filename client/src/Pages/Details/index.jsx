import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router-dom'
    import { WishlistContext } from '../../context/WishlistContext'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BasketContext } from '../../context/BasketContext';
import axios from "axios"
const Details = () => {


    const {wish,addWish}=useContext(WishlistContext)
    const {addbasket}=useContext(BasketContext)
    const [data, setData] = useState(null)
    const {id}=useParams()
    async function getIdData() {
        const res=await axios(`http://localhost:8000/${id}`)
        setData(res.data)
    }
    useEffect(() => {
        getIdData()
    }, [])
    
  return (
    <div>
{
    data && 
    <div className='card-menu'>
    <div className="content">
        <div className="con-img">
            <div className="image">
        <img src={data.image} alt="" />
    </div>
    <div className="info">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <div className="div">
        <span className='red' onClick={()=>addWish(data)}>{wish.some(x=>x._id===data._id) ? <GoHeartFill /> : <GoHeart />}</span>
        <span onClick={()=>addbasket(data)}><AiOutlineShoppingCart /></span>
    </div>
    </div>
    
    </div>
    
    <div className="price">
        <span>${data.price}</span>
    </div>
        </div>
    
        </div>
}
    </div>
  )
}

export default Details