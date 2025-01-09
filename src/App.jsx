import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from './store/reducers/productSlice';



const App = () => {
const dispatch=useDispatch();

const {data:products}=  useSelector((state)=>state.product)
console.log(products);
const product={
  id:3,
  name:"product 3",
  price:300,
}

const AddProduct=()=>{
 dispatch(add(product));
}
const DeleteProduct=(index)=>{
  dispatch(remove(index));
  console.log(index);
}


  return (
    <div className=' px-4 py-4 h-screen w-full'>
        <button 
        onClick={()=>{
          AddProduct()
        }}
        className='px-4 py-4 bg-blue-400 text-white rounded-md font-semibold text-xl mb-10'>Add Data</button>
      <div className='flex gap-10'>

      {products.map((product,index)=>{
        return <div key={index} className='px-4 text-xl flex flex-col gap-4 items-center text-white py-4 bg-gray-400 w-1/4'>
          <h1>Name: {product.name}</h1>
          <h2 >Product_id : {product.id}</h2>
          <h3>Price : ${product.price}</h3>
          <button 
          onClick={()=>{  
            DeleteProduct(index);
          }}
          className='px-4 py-4 bg-red-500 text-white text-xl font-semibold rounded-md'>Delete Product</button>
        </div>
      })}
      </div>
    </div>
  )
}

export default App