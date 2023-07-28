import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from "./reducers/manga.js";

const store = configureStore({
    reducer:{
        //aca vamos a traernos los reductores de los diferentes recursos(usuarios, mangas, etc)
        mangas: manga_reducer
    }
})

export default store