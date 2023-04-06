import GoodsItem from '../GoodsItem/GoodsItem'
import React from 'react'

export default function GoodsList(props) {
    const {goods}=props
  return (
    <div>
        {goods.map(elem =>
        <GoodsItem 
        key={elem.id} 
        title={elem.title} 
        id={elem.id}
        price={elem.price}/>
        )}
        </div>
  )
}
