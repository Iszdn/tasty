import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import FormAdd from '../../components/Formik'
import axios from 'axios'
import { MdDeleteOutline } from "react-icons/md";
const AddPage = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [property, setProperty] = useState(null)
    async function getData() {
        const res=await axios("http://localhost:8000/")
        setData(res.data)
    }
    async function delData(id) {
        const res=await axios.delete(`http://localhost:8000/${id}`)
        getData()
    }
    useEffect(() => {
      
        getData()
    }, [])
    
    return (
        <>
            <Helmet>
                <title>add</title>

            </Helmet>
            <div className="add">
                <FormAdd getData={getData}/>
                <div className="filter d-flex">
                    <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <div className="btn" onClick={()=>setProperty({name:"title",asc:true})}>a-z</div>
                <div className="btn" onClick={()=>setProperty({name:"title",asc:false})}>z-a</div>
                <div className="btn" onClick={()=>setProperty({name:"price",asc:true})}>inc</div>
                <div className="btn" onClick={()=>setProperty({name:"price",asc:false})}>dec</div>
                <div className="btn" onClick={()=>setProperty({name:"title",asc:null})}>default</div>
                
                </div>
                <div className="table">
                <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>description</th>
        <th>price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
    {
       data && data
       .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
       .sort((a,b)=>{
        if (property && property.asc===true) {
            return (a[property.name]<b[property.name]) ? -1 : ((b[property.name]<a[property.name]) ? 1 : 0)
        }
        else  if (property && property.asc===false) {
            return (a[property.name]>b[property.name]) ? -1 : ((b[property.name]>a[property.name]) ? 1 : 0)
        }
        else{
            return 0;
        }
       })
       .map(product=>
         <tr key={product._id}>
        <td><img src={product.image} alt="" /></td>
        <td>{product.title}</td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td><span onClick={()=>delData(product._id)}><MdDeleteOutline /></span></td>
      </tr>
        ) 
    }
     
    
    </tbody>
  </table>
</div>
                </div>
            </div>
        </>
    )
}

export default AddPage