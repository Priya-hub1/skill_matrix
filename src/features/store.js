import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './login/loginSlice';


export const store = configureStore({
    reducer: {rootReducer}
}
)
