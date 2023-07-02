import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import type { UseSelectorType } from '../types/Store/index';
import countReducer from './count';

export default configureStore({
	reducer: {
		countReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActionPaths: ['payload'],
				ignoredPaths: [],
			},
		}),
});

export const useSelector: TypedUseSelectorHook<UseSelectorType> = rawUseSelector;
