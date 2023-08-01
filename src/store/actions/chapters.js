import { createAction } from "@reduxjs/toolkit";

let save_title = createAction('save_title', (obj) => {
    return { payload: { text: obj.title } };
})

let save_number = createAction('save_number', (obj) => {
    return { payload: { number: obj.number } };
})

const chapter_actions = { save_title, save_number };

export default chapter_actions;