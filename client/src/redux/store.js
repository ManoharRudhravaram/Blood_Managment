import {configureStore} from '@reduxjs/toolkit';
import authslice from './features/auth/authslice';

let store=configureStore({
    reducer:{
        auth:authslice.reducer,
    }
})

export default store;