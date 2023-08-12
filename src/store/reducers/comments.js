import { createReducer } from "@reduxjs/toolkit";
import commentsActions from "../actions/comments";

const {readComments, destroyComment} = commentsActions

const initialState = {
    comments: [], //comments es un array de objetos con 4 ids
    next: null,
    prev: null,
    allComments : null
}

const commentsReducer = createReducer(
    initialState,
    builder => builder.addCase(
        readComments.fulfilled,
        (state, action)=>{
            let newState = {
                ...state,
                comments : action.payload.comments,
                next : action.payload.next,
                prev : action.payload.prev,
                allComments : action.payload.allComments
            }
            return newState
        }
    )
    .addCase(
        destroyComment.fulfilled,
        (state, action) => {
            let newState = {
                ...state,
                comments : state.comments.filter(each => each._id !== action.payload.id_to_delete)
            }
            return newState
        }
    )
)

export default commentsReducer