import { createSlice } from '@reduxjs/toolkit';
import type { DispatchType } from '../types/Store/';
import type { Add, Minus, AsyncAdd } from '../types/Store/Count';

const countState = {
	count: 0,
};

const count = createSlice({
	name: 'count',
	initialState: {
		countState,
	},
	reducers: {
		init(state) {
			state.countState = countState;
		},
		add(state, datas: Add) {
			const { payload } = datas;
			state.countState.count += payload;
		},
		minus(state, datas: Minus) {
			const { payload } = datas;
			state.countState.count -= payload;
		},
	},
});

const { init, add, minus } = count.actions;

const asyncAdd = (datas: AsyncAdd) => {
	const { payload } = datas;
	return async (dispatch: DispatchType) => {
		dispatch(add(payload));
	};
};

export { init, add, minus, asyncAdd };

export default count.reducer;
