import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, edit, asyncremove } from "./store/actions/productAction";

const App = () => {
  const dispatch = useDispatch();

  const [productname, setProductName] = useState("");
  const [productprice, setProductPrice] = useState("");
  const [productid, setProductId] = useState("");

  const [isediting, setIsEditing] = useState(false)
  const [editid, setEditId] = useState(null)

  const { data: products } = useSelector((state) => state.product);
  // console.log(products);

  const SubmitHandler = (e) => {

    if(isediting){
      dispatch(edit({id:editid,updatedProduct:{name:productname,id:productid,price:productprice}}))
    setIsEditing(false)
    setEditId(null)
    }
    else{
      dispatch(add({name:productname,id:productid,price:productprice}));
    }
    e.preventDefault();
    setProductId("");
    setProductName("");
    setProductPrice("");
    // console.log(arr);
  };

  const DeleteProduct = (index) => {
    dispatch(asyncremove(index));
    console.log(index);
  };

  const EditHandler=(index)=>{
    const ProductToedit=products[index]
    setProductId(ProductToedit.id)
    setProductName(ProductToedit.name)
    setProductPrice(ProductToedit.price)
    setIsEditing(true)
    setEditId(ProductToedit.id)

    console.log(ProductToedit);
  }

  return (
    <div className="h-screen w-full ">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="px-4 py-4 bg-gray-300 flex flex-col gap-10  "
      >
        <input
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          value={productname}
          className="px-4 py-3 rounded-md outline-none mx-auto  w-1/2"
          type="text"
          placeholder="Enter Product name"
        />
        <input
          onChange={(e) => {
            setProductId(e.target.value);
          }}
          value={productid}
          className="px-4 py-3 rounded-md outline-none mx-auto  w-1/2"
          type="number"
          placeholder="Enter Product id in numbers"
        />
        <input
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          value={productprice}
          className="px-4 py-3 rounded-md outline-none mx-auto  w-1/2"
          type="number"
          placeholder="Enter price"
        />

        <button className="px-4 py-4 bg-blue-400 text-white rounded-md font-semibold text-xl mb-10 mx-auto  w-1/3">
          Add Data
        </button>
      </form>

      <div className="px-4 grid grid-row-3 grid-cols-3 gap-4 w-full bg-gray-300">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="px-4 text-xl flex flex-col gap-4 items-center text-white py-4 bg-gray-700 "
            >
              <h1>Name: {product.name}</h1>
              <h2>Product_id : {product.id}</h2>
              <h3>Price : ${product.price}</h3>
              <div className="flex gap-10">
              <button
                onClick={() => {
                  DeleteProduct(index);
                }}
                className="px-4 py-4 bg-red-500 text-white text-xl font-semibold rounded-md"
              >
                Delete Product
              </button>
              <button
                onClick={() => {
                  EditHandler(index);
                }}
                className="px-4 py-4 bg-yellow-500 text-white text-xl font-semibold rounded-md"
              >
                Edit Product
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
