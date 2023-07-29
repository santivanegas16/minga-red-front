import { configureStore } from "@reduxjs/toolkit";
import manga_reducer from "./reducers/manga.js";
import authorReducer from "./reducers/authors";
import mangaReducer from "./reducers/mangas";

const store = configureStore({
	reducer: {
		//aca vamos a traernos los reductores de los diferentes recursos(usuarios, mangas, etc)
		authors: authorReducer,
		mangas: { ...mangaReducer, ...manga_reducer }
	}
})

export default store