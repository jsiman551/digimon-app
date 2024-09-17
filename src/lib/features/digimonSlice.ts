import { DigimonType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DigimonState {
    result: DigimonType[];
}

const initialState: DigimonState = {
    result: [],
};

const digimonSlice = createSlice({
    name: 'digimons',
    initialState,
    reducers: {
        setDigimons(state, action: PayloadAction<DigimonType[]>) {
            state.result = action.payload;
        },
    },
});

export const { setDigimons } = digimonSlice.actions;

export default digimonSlice.reducer;
