import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GoodInfoPage() {

    let [product, setProduct]= useState({})
    let {id} = useParams()

    useEffect(()=>{
        let url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])


  return (
    <div>
       <h1>{product.title}</h1> 
       <img src={product.image}/>
        </div>
  )
}
