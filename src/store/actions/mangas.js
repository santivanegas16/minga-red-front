import { createAction } from "@reduxjs/toolkit";

let saveMangasNews = createAction(
    'saveMangasNews',
    (obj)=>{
        return{
            payload:{
                mangas_news: obj.mangas_news
            }
        }
    }
)

const mangasActions = {
    saveMangasNews
}

export default mangasActions