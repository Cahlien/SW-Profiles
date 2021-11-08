import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [{}]
};

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        updateCharacters(state, action) {
            state.characters = action.payload;
        },
        clearCharacters(state) {
            state.characters = [];
        }
    }
});

export const characterActions = characterSlice.actions;
export default characterSlice.reducer;
