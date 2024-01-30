import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        filterProducts: JSON.stringify(sessionStorage.getItem('filteredData')) || storeData,
        singleProduct: JSON.stringify(sessionStorage.getItem("oneProduct")) || storeData,
    },
    reducers: {
        filterProducts(state, action) {
            try {
                const filter = storeData.filter((product) => product.type === action.payload)
                state.filterProducts = filter
                // console.log("filter", filter)
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filteredData", saveState)
            } catch (err) {
                return err
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload)
                state.singleProduct = oneProduct
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
                // console.log("oneProduct ", oneProduct)
            } catch (err) {
                return err;
            }
        },
        filterGender(state, action) {
            try {
                const gender = state.filterProducts.filter(
                    (product) => product.gender === action.payload
                );
                state.error = false;
                state.filterProducts = gender;
                const oneGenderType = gender.length > 0;
                if (oneGenderType) {
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem("filteredData", saveState);
                } else {
                    state.error = true;
                    state.filterProducts = [];
                }
            } catch (err) {
                return err;
            }
        },
        sortByPrice(state) {
            try {
                const price = state.filterProducts.sort((a, b) =>
                    a.price > b.price ? -1 : 1
                );
                state.filterProducts = price;
                let count = price.length;
                if (count > 1) {
                    const noError = false;
                    state.error = noError;
                    if (!noError) {
                        state.filterProducts = price;
                        const saveState = JSON.stringify(price);
                        sessionStorage.setItem("filteredData", saveState);
                    }
                } else {
                    state.error = true;
                    state.filterProducts = [];
                }
            } catch (err) {
                return err;
            }
        },
        filterByColor(state, action) {
            try {
                const color = state.filterProducts.filter((product) =>
                    product.color.includes(action.payload)
                );
                state.error = false;
                state.filterProducts = color;
                if (color.length <= 0) {
                    state.error = true;
                    state.filterProducts = [];
                } else {
                    state.error = false;
                    state.filterProducts = color;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem("filteredData", saveState);
                }
            } catch (err) {
                return err;
            }
        },
        filterBySize(state, action) {
            try {
                const size = state.filterProducts.filter((product) =>
                    product.size.includes(action.payload)
                );
                state.error = false;
                state.filterProducts = size;
                if (size.length <= 0) {
                    state.error = true;
                    state.filterProducts = [];
                } else {
                    state.error = false;
                    state.filterProducts = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filteredData", saveState);
                }
            } catch (err) {
                return err;
            }
        },

    }
})

export const {
    filterProducts,
    singleProduct,
    filterGender,
    sortByPrice,
    filterByColor,
    filterBySize, } = productSlice.actions
export default productSlice.reducer