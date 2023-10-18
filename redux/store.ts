// Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

// Slices
import binxSlice from './slices/binxSlice'

const rootReducer = combineReducers({
	binx: binxSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export const useBinxSelector: TypedUseSelectorHook<
	ReturnType<typeof rootReducer>
> = useSelector
export const useBinxDispatch = () => useDispatch<typeof store.dispatch>()
