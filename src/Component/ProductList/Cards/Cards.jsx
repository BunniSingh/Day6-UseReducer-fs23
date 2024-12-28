import React from 'react'
import style from './Cards.module.css';
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
const Cards = ({ list, updateFun}) => {
  return (
    <>
      <div className={style.card}>
        <div className={style['phone-detail']}>
          <img src={list.Image} alt={list.Brand} />
          <div className={style.phone}>
            <h3>{list.Brand}</h3>
            <p>${list.productTotalPrice}</p>
            <button onClick={() => updateFun('del',list.id)}>remove</button>
          </div>
      </div>
          <div className={style.control}>
           <CiCircleChevUp onClick={()=>updateFun('inc', list.id)} className={style.icon}/>
              <p>{list.count}</p>
            <CiCircleChevDown onClick={()=>updateFun('dec', list.id)} className={style.icon}/>
          </div>
        </div>
    </>
  )
}

export default Cards