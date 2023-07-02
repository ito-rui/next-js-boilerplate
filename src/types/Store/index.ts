import store from '../../store/index';

export type UseSelectorType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
