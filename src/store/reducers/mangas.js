import { createReducer } from "@reduxjs/toolkit";
import mangasActions from "../actions/mangas";

const {saveMangasNews} = mangasActions

const initialState = {
    new : [],
    old : [],
    all : [],
    logo : ""
}

const mangaReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        saveMangasNews,
        (state, action) => {
            let newState = {
                ...state,
                new : action.payload.mangas_news?.new,
                old : action.payload.mangas_news?.old,
                all : action.payload.mangas_news?.all,
                logo : action.payload.mangas_news?.logo
            }
            return newState
        }
    )
)

export default mangaReducer

