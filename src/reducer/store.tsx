import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from './sideNavState'

const store = configureStore({
    reducer: {
        sideNav: sideNavReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch