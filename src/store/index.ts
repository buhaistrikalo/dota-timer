import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { PersistedState, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { timerSlice } from './slices/timerSlice';
import { settingsSlice } from './slices/settingsSlice';


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    settings: settingsSlice.reducer,
    timer: timerSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type PersistedRootState = RootState & PersistedState;
export type AppDispatch = typeof store.dispatch;
