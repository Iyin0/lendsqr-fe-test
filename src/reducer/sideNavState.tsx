import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface sideNavStateType {
    value: boolean
}

const initialState: sideNavStateType = {
    value: false
}

export const sideNavSlice = createSlice({
    name: 'sideNav',
    initialState,
    reducers: {
        toggleState: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
})

export const { toggleState } = sideNavSlice.actions

export const selectState = (state: RootState) => state.sideNav.value

export default sideNavSlice.reducer