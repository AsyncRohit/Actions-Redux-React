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
        }
    }
    
})

export default productSlice.reducer

export const {add,remove} =productSlice.actions;