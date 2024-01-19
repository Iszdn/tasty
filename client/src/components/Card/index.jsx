import React, { useContext } from 'react'
import "./index.scss"
import { WishlistContext } from '../../context/WishlistContext'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
const Card = (product) => {
    const {wish,addWish}=useContext(WishlistContext)
    const {addbasket}=useContext(BasketContext)
  return (
    <div className='card-menu'>
<div className="content">
    <div className="con-img">
        <div className="image">
    <img src={product.image} alt="" />
</div>
<div className="info">
    <h3><Link to={product._id}>{product.title}</Link></h3>
    <p>{product.desc}</p>
    <div className="div">
    <span className='red' onClick={()=>addWish(product)}>{wish.some(x=>x._id===product._id) ? <GoHeartFill /> : <GoHeart />}</span>
    <span onClick={()=>addbasket(product)}><AiOutlineShoppingCart /></span>
</div>
</div>

</div>

<div className="price">
    <span>${product.price}</span>
</div>
    </div>

    </div>
  )
}

export default Card