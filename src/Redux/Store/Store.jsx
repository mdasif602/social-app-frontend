import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../Slices/LoginSlices"

const store = configureStore({
    reducer : {
        auth : authReducer
    }
})

export default store