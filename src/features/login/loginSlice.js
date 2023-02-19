import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import instance from  '../../common/apis/baseUrl';


const initialState = {
    userData:{},
    isLoading : false,
    error : null,
}

export const getUserDetails = createAsyncThunk(
    'userName/getUserDetails',
     async (userCredentials) => {
        let response = await instance.post('/auth/login',userCredentials)
        return response.data
    }
)


const userNameSlice = createSlice({
    name : "userName",
    initialState,
    reducers : {},
    extraReducers : (builder) =>{

        builder.addCase(getUserDetails.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
        })

        builder.addCase(getUserDetails.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})


export default userNameSlice.reducer;
