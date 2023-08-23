import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../apiUrl";
import header from "../../header";
import axios from "axios";

const saveMangasNews = createAction(
    'saveMangasNews',
    (obj) => {
        return {
            payload: {
                mangas_news: obj.mangas_news
            }
        }
    }
)

const save_title = createAction('save_title', obj => {
    return { payload: { text: obj.title } }
})

const saveMangaDetail = createAction('saveMangaDetail', obj => {
    return { payload: { manga_detail: obj.manga_detail } }
})

const save_checks = createAction('save_checks', obj => {
    return { payload: { checks: obj.checks } }
})

const save_myChecks = createAction('myChecks', obj => {
    return { payload: { myChecks: obj.myChecks } }
})

const readManga = createAsyncThunk(
    'readManga', async (obj) => {
        try {
            let myMangas = await axios(apiUrl + 'mangas/me', header())
            // console.log(myMangas.data.response);

            return {
                myMangas: myMangas.data.response
            }
        } catch (error) {
            console.log(error)
            return{
                mangas:[],
            }
        }
    }
)
const mangasActions = {
    readManga,
    saveMangasNews,
    save_title,
    saveMangaDetail,
    save_checks,
    save_myChecks
}

export default mangasActions