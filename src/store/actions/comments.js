import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl"
import headers from "../../header"

const readComments = createAsyncThunk(
    "readComments",
    async (id) => {
        try {
            let comments = await axios(apiUrl + "comments?chapter_id=" + id, headers())
            return {
                comments: comments.data.response.comments,
                next: comments.data.response.next,
                prev: comments.data.response.prev,
                allComments: comments.data.response.allComments
            }

        } catch (error) {
            return {
                comments: [],
                next: null,
                prev: null,
                allComments: null
            }
        }
    }
)

const destroyComment = createAsyncThunk(
    "destroyComment",
    async (obj) => {
        try {
            let one = await axios.delete(apiUrl + "comments/" + obj.comment_id, headers())
            //console.log(one.data.response) //aca tengo el id que me devuelve el backend del comentario eliminado
            //este es el id del comentario que tengo quitar del estato actual comments
            return {
                id_to_delete: one.data.response //tambien podria enviar obj.comment_id
            }
        } catch (error) {
            return null
        }
    }
)

const updateComment = createAsyncThunk(
    "updateComment",
    async (obj) => {
        try {
            let one = await axios.put(apiUrl + "comments/" + obj.comment_id, obj, headers())
            // console.log(one.data.response)
            return one
        } catch (error) {
            return null
        }
    }
)

const commentsActions = {
    readComments,
    destroyComment,
    updateComment
}

export default commentsActions