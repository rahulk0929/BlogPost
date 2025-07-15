import { configureStore } from "@reduxjs/toolkit";
import authreducers from "./Authslice.js"; 
const store=configureStore({
    reducer:{
        auth : authreducers,
    }
})
export default store;