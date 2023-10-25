import { createSlice } from '@reduxjs/toolkit'

export const binxSlice = createSlice({
	name: 'binx',
	initialState: {
		open: false,
	},
	reducers: {
		toggleBinx: (state) => {
			state.open = !state.open
		},
	},
})

export const { toggleBinx } = binxSlice.actions

export default binxSlice.reducer
