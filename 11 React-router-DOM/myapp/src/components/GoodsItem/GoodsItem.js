import { Link } from 'react-router-dom'
import styles from './GoodsItem.module.css'
import React from 'react'

export default function GoodsItem(props) {
    const {title,price,id,count}=props
  return (
    <div className={styles.goods_wrapper}>
        <Link to={`/goods/${id}`}>
        <div style={{display:'flex', gap:'5px'}}>
            <h3>{`${id}`}</h3>
            <h3>{title}</h3>
        </div>
        </Link>
        <div style={{display:'flex', gap:'5px'}}>
            <p>{count}</p>
            <p>{price}</p>
        </div>
       
    </div>
  )
}
