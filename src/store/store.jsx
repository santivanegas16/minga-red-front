import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        //aca vamos a traernos los reductores de los diferentes recursos(usuarios, mangas, etc)
    }
})

export default store