import {  createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
    name:"product",
    initialState :{
        filterProducts: JSON.stringify(sessionStorage.getItem('filteredData')) || storeData,
    },
    reducers:{
        filterProducts(state , action){
            try{
                const filter = storeData.filter((product) => product.type === action.payload)
                state.filterProducts = filter
                console.log("filter", filter)
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData" , saveState)
            }catch(err){
                return err
            } 
        },
    }
})

export const {filterProducts} = productSlice.actions
export default productSlice.reducer