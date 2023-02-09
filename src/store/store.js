import { configureStore } from '@reduxjs/toolkit';
import listReducer from './list.js'


export default configureStore({
    reducer: {
        lists: listReducer
    },
});