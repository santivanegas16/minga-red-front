import { createReducer } from "@reduxjs/toolkit";
import mangasActions from "../actions/mangas";

const { saveMangasNews } = mangasActions
const { save_title } = mangasActions;

const initialState = {
    new: [],
    old: [],
    all: [],
    logo: "",
    text: ''
}

const mangaReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            saveMangasNews,
            (state, action) => {
                let newState = {
                    ...state,
                    new: action.payload.mangas_news?.new,
                    old: action.payload.mangas_news?.old,
                    all: action.payload.mangas_news?.all,
                    logo: action.payload.mangas_news?.logo
                }
                return newState
            }
        )
        .addCase(
            save_title,
            (state, action) => {
                const newState = { ...state, text: action.payload.title?.text }
                return newState;
            })
)

export default mangaReducer

