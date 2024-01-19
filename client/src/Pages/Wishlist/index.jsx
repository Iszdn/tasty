import React, { useContext } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
   
import { BasketContext } from '../../context/BasketContext';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { IoHeartDislikeOutline } from "react-icons/io5";
const Wishlist = () => {
    const {basket}=useContext(BasketContext)
    const {deleteWish,wish}=useContext(WishlistContext)
  return (
    <>
     <Helmet>
        <title>wish</title>
       
      </Helmet>
      <div className="basket">
      <div className="header">
    
    
</div>
{
    wish.length===0 ? <h2>Wishlist is Empty</h2> : <div className="container">
    <div className="row">
        <h2>Wishlist</h2>
        {
            wish && wish.map(product=>
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
    <span onClick={()=>deleteWish(product)}><IoHeartDislikeOutline /></span>
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
      
    </div>
</div>
}

      </div>
    </>
  )
}

export default Wishlist