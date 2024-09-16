import { configureStore } from '@reduxjs/toolkit';
import digimonReducer from './features/digimonSlice'; // Ajusta la ruta según tu estructura

export const makeStore = () => {
    return configureStore({
        reducer: {
            digimons: digimonReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
