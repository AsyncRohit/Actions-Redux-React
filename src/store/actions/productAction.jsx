
export {add,edit} from "../reducers/productSlice"

import { remove } from "../reducers/productSlice"

export const asyncremove=(index)=>(dispatch,getstate)=>{
    try{
setTimeout(() => {
    dispatch(remove(index))
}, 2000);
    }
    catch (error){
        console.log(error);
    }
}