import { createAction } from '@reduxjs/toolkit';

const save_title = createAction('save_title', obj => {
    return { payload: { text: obj.title } }
})

const manga_action = { save_title };

export default manga_action;