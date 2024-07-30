import { configureStore } from "@reduxjs/toolkit";
import userdata from "../slice/userslice"

const store = configureStore({

    reducer: {
        userdata: userdata
    }
})
export default store