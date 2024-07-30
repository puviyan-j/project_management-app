import { createSlice } from "@reduxjs/toolkit";


const initialState = {users:null};

export const userSlice = createSlice({

    name: "user",
    initialState,

    reducers: {

        login: (state, action) => {

            state.users = action.payload 

        }

    }
})

export const userselect = (state) => state.userdata.users
export const { login } = userSlice.actions
export default userSlice.reducer
