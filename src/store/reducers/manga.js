import { createReducer } from "@reduxjs/toolkit";
import manga_action from "../actions/manga.js";

const { save_title } = manga_action;

const initialState = { text: '' }

const manga_reducer = createReducer(initialState, (builder) => {
    return builder.addCase(save_title, (state, action) => {
        const newState = { ...state, text: action.payload.text }
        return newState;
    })
})

export default manga_reducer;