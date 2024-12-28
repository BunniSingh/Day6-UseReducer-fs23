import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import ProductList from './Component/ProductList/ProductList'
import { use } from 'react'


function App() {
  let [cartLength, setCartLength] = useState(4);
  let [smartPhoneData, setsmartPhoneData] = useState([
    {
      id: 'Phone_1',
      Brand: 'Samsung Galaxy S8',
      Price: '399.99',
      Image: 'https://www.course-api.com/images/cart/phone-1.png',
      count: 1,
      productTotalPrice: '399.99'
    },
    {
      id: 'Phone_2',
      Brand: 'google pixel',
      Price: '499.99',
      Image: 'https://www.course-api.com/images/cart/phone-2.png',
      count: 1,
      productTotalPrice: '499.99'
    },
    {
      id: 'Phone_3',
      Brand: 'Xiaomi Redmi Note 2',
      Price: '699.99',
      Image: 'https://www.course-api.com/images/cart/phone-3.png',
      count: 1,
      productTotalPrice: '699.99'
    },
    {
      id: 'Phone_4',
      Brand: 'Xiaomi Redmi Note 2Samsung Galaxy S7',
      Price: '599.99',
      Image: 'https://www.course-api.com/images/cart/phone-4.png',
      count: 1,
      productTotalPrice: '599.99'
    }
  ])
  return(
    <>
      <Navbar numbar={cartLength}/>
      <ProductList data ={smartPhoneData} setsmartPhoneData={setsmartPhoneData} setCartLength={setCartLength} />
    </>
  )
}

export default App
