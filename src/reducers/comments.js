import sortBy from 'sort-by';
import { RECEIVE_COMMENTS, RECEIVE_SINGLE_COMMENT ,UPDATE_COMMENT_VOTESCORE,
    DELETE_COMMENT, LOAD_COMMENT_FORMDATA, UPDATE_COMMENT, SORT_COMMENTS} from '../actions/types'
const initialState ={
    comments:[],
    currentComment:null,

}

const updatedCommentsWithVoteChanges = (state,action) => {
    const indexOfUpdatedComment = state.comments.findIndex((commentItem) => {
      return commentItem.id === action.voteData.id; });
    if( indexOfUpdatedComment >= 0 )
        return {...state,
                ...state.comments[indexOfUpdatedComment].voteScore=action.voteData.voteScore }
    else
        return state
}
const updatedCommentsWithStatusChanges = (state,action) => {
    const indexOfDeletedComment = state.comments.findIndex((commentItem) => {
      return commentItem.id === action.comment; });
    if( indexOfDeletedComment >= 0 )
        return {...state,
                ...state.comments[indexOfDeletedComment].deleted=true,
 }
    else
        return state
}
const updatedCommentsWithChanges = (state,action) => {
    const indexOfUpdatedComment = state.comments.findIndex((commentItem) => {
      return commentItem.id === action.comment; });
    if( indexOfUpdatedComment >= 0 )
        return {...state,
                ...state.comments[indexOfUpdatedComment]=action.comment }
    else
        return state
}

export default function comments(state=initialState,action) {
    switch (action.type) {
        case RECEIVE_COMMENTS: return {
            ...state,
            comments:action.comments.filter(( comment ) => comment.deleted===false ).sort(sortBy('-voteScore'))
            }
        case RECEIVE_SINGLE_COMMENT: return {
            ...state,
            currentComment:action.comment
            }
        case UPDATE_COMMENT_VOTESCORE: return updatedCommentsWithVoteChanges(state,action)
        case DELETE_COMMENT:
            return updatedCommentsWithStatusChanges(state,action)
        case UPDATE_COMMENT: return updatedCommentsWithChanges(state,action)
        case LOAD_COMMENT_FORMDATA: return state
        case SORT_COMMENTS: return {...state,
                                posts:state.comments.sort(sortBy(action.columnName))}

        default: return state

    }
}
