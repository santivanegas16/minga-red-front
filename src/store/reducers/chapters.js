import { createReducer } from "@reduxjs/toolkit";
import chapter_actions from "../actions/chapters";

const { saveTitle, save_number } = chapter_actions;

const initialState = {
    text: "",
    number: 0,
}

const chapterReducer = createReducer(initialState, builder => {
    builder.addCase(saveTitle, (state, action) => {
        const newState = { ...state, text: action.payload?.text }
        return newState;
    }).addCase(save_number, (state, action) => {
        const newState = { ...state, number: action.payload?.number }
        return newState;
    })
})

export default chapterReducer;