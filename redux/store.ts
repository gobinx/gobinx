// Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

// Slices
import authSlice from './slices/auth.slice'
import binxSlice from './slices/binx.slice'

const rootReducer = combineReducers({
	auth: authSlice,
	binx: binxSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export const useBinxSelector: TypedUseSelectorHook<
	ReturnType<typeof rootReducer>
> = useSelector
export const useBinxDispatch = () => useDispatch<typeof store.dispatch>()
