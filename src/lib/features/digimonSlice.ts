import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define el tipo de estado para los digimons
interface Digimon {
    name: string;
    img: string;
    level: string;
}

interface DigimonState {
    digimons: Digimon[];
}

const initialState: DigimonState = {
    digimons: [],
};

const digimonSlice = createSlice({
    name: 'digimons',
    initialState,
    reducers: {
        setDigimons(state, action: PayloadAction<Digimon[]>) {
            state.digimons = action.payload;
        },
    },
});

export const { setDigimons } = digimonSlice.actions;

export default digimonSlice.reducer;
