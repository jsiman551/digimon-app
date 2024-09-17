import { DigimonType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DigimonState {
    result: DigimonType[];
    error: string | null;
}

const initialState: DigimonState = {
    result: [],
    error: null,
};

const digimonSlice = createSlice({
    name: 'digimons',
    initialState,
    reducers: {
        setDigimons(state, action: PayloadAction<DigimonType[]>) {
            state.result = action.payload;
            state.error = null;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export const { setDigimons, setError } = digimonSlice.actions;

export default digimonSlice.reducer;
