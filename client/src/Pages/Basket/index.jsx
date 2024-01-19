import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
    import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const Basket = () => {
    const {basket,deletebasket,subtotal,incbasket,decbasket}=useContext(BasketContext)
    const {wish,addWish}=useContext(WishlistContext)
  return (
    <>
     <Helmet>
        <title>basket</title>
       
      </Helmet>
      <div className="basket">
      <div className="header">
    
    
</div>
{
    basket.length===0 ? <h2>Basket is Empty</h2> : <div className="container">
    <div className="row">
        <h2>Basket</h2>
        {
            basket && basket.map(product=>
                <div className='col-lg-6 col-md-12 col-12 '>
                
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
    <span onClick={()=>deletebasket(product)}><MdOutlineRemoveShoppingCart /></span>
    <div onClick={()=>incbasket(product)} className="btn">+</div>
    <span>{product.count}</span>
    <div onClick={()=>decbasket(product)} className="btn">-</div>
    <span>Total: {product.total}</span>

</div>
</div>

</div>

<div className="price">
    <span>${product.price}</span>
</div>
    </div>

    </div>
                 
                 </div>
                )
        }
      <p>subtotal:{subtotal}$</p>
    </div>
</div>
}

      </div>
    </>
  )
}

export default Basket