import { createAction } from "@reduxjs/toolkit";

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

const mangasActions = {
    saveMangasNews,
    save_title,
    saveMangaDetail,
    save_checks,
    save_myChecks
}

export default mangasActions