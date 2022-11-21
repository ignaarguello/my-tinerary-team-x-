import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers/rootReducers'


export const store = configureStore({
    reducer: rootReducers
})