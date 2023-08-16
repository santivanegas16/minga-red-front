import { createReducer } from "@reduxjs/toolkit";
import mangasActions from "../actions/mangas";

const { saveMangasNews, save_title, saveMangaDetail, save_checks, save_myChecks } = mangasActions

const initialState = {
    new: [],
    old: [],
    all: [],
    checks: [],
    logo: "",
    text: "",
    manga_detail: {},
    myChecks : []
}

const mangaReducer = createReducer(
    initialState,
    (builder) => builder.addCase(saveMangasNews, (state, action) => {
        const newState = {
            ...state,
            new: action.payload.mangas_news?.new,
            old: action.payload.mangas_news?.old,
            all: action.payload.mangas_news?.all,
            logo: action.payload.mangas_news?.logo
        }
        return newState
    }).addCase(save_title, (state, action) => {
        const newState = { ...state, text: action.payload?.text }
        return newState;
    }).addCase(saveMangaDetail, (state, action) => {
        const newState = { ...state, manga_detail: action.payload?.manga_detail }
        return newState;
    }).addCase(save_checks, (state, action) => {
        const newState = { ...state, checks: action.payload?.checks }
        return newState;
    }).addCase(save_myChecks, (state, action) => {
        const newState = { ...state, myChecks: action.payload?.myChecks }
        return newState;
    })
)

export default mangaReducer;