import { createAction } from "@reduxjs/toolkit";

let saveTitle = createAction('saveTitle', (obj) => {
    return { payload: { text: obj.title } };
})

let save_number = createAction('save_number', (obj) => {
    return { payload: { number: obj.number } };
})

const chapter_actions = { saveTitle, save_number };

export default chapter_actions;