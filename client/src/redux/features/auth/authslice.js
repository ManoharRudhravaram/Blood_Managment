import { createSlice } from '@reduxjs/toolkit'
import { userLogin, userRegister } from '../authAction'
let token=localStorage.getItem("blood-token");
let initialValue = {
  loading: false,
  user: null,
  token: token?token:null,
  error: null
}
const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true
      state.error = ""
    })
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      console.log('hello dev.........', payload);
      state.loading = false
      state.user = payload.user
    })
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload.error
    })
    builder.addCase(userRegister.pending, (state) => {
      state.loading = false
      state.error = ""
    })
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false
      state.error = ""
      //state.success = payload.success
    })
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload.error
    })
  }
})
export default authSlice