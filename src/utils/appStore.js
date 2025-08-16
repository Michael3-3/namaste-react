import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice"
const appStore = configureStore({
    reducer: {
        // Add your reducers here
        data: dataSlice,
        },
});


export default appStore;