import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./reducers/authors";
import mangaReducer from "./reducers/mangas";
import chapterReducer from "./reducers/chapters";
import commentsReducer from "./reducers/comments";

const store = configureStore({
	reducer: {
		//aca vamos a traernos los reductores de los diferentes recursos(usuarios, mangas, etc)
		authors: authorReducer,
		mangas: mangaReducer,
		chapters: chapterReducer,
		comments : commentsReducer
	}
})

export default store