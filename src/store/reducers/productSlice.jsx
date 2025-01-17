import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:[
        
    ]
}
const productSlice=createSlice({
    name: "products",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.data.push(action.payload);
            console.log(action.payload);
        },
        remove:(state,action)=>{
            state.data.splice(action.payload,1);
            console.log(action);
        },
        edit:(state,action)=>{
            console.log(action.payload);
            const {id,updatedProduct} = action.payload;
const index=state.data.findIndex((product)=>product.id===id)
if(index !== -1){
    state.data[index]={...state.data[index],...updatedProduct}
}


        }
    }
    
})

export default productSlice.reducer

export const {add,remove,edit} =productSlice.actions;