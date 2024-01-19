import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishlistContext=createContext()


const WishlistProvider = ({children}) => {
    const [wish, setWish] = useLocalStorage("wishlist")

    function addWish(product) {
        const existWish=wish.findIndex(x=>x._id===product._id)
        if (existWish===-1) {
            setWish([...wish,{...product}])
        }
        else{
            deleteWish(product)
        }
    }
    function  deleteWish(product) {
        const deletedWish=wish.filter(x=>x._id!==product._id)
       setWish(deletedWish)
    }

    const data={
        wish,setWish,addWish,deleteWish
    }
  return (
    <WishlistContext.Provider value={data}>
    {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider