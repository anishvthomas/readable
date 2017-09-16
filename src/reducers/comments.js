import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT ,UPDATE_COMMENT_VOTESCORE, DELETE_COMMENT} from '../actions'
const initialState ={
    comments:[],

}

const updatedCommentsWithVoteChanges = (state,action) => {
    const indexOfUpdatedComment = state.comments.findIndex((commentItem) => {
      return commentItem.id === action.voteData.id; });
      console.log('indexOfUpdatedCommentaction.voteData.id',action.voteData.id)
      console.log('indexOfUpdatedComment',indexOfUpdatedComment)
    if( indexOfUpdatedComment >= 0 )
        return {...state,
                ...state.comments[indexOfUpdatedComment].voteScore=action.voteData.voteScore }
    else
        return state
}
const updatedCommentsWithStatusChanges = (state,action) => {
    console.log('updatedPostsWithStatusChanges:action count: ',state.comments.length)
    const indexOfDeletedComment = state.comments.findIndex((commentItem) => {
      return commentItem.id === action.comment; });
     // console.log('indexOfDeletedPost:action',action)
     // console.log('indexOfDeletedPost',indexOfDeletedPost)
    if( indexOfDeletedComment >= 0 )
        return {...state,
                ...state.comments[indexOfDeletedComment].deleted=true }
    else
        return state
}
export default function comments(state=initialState,action) {
    console.log(" comments:reducer ****action:",action)
    //console.log("categories:reducer ****state:",state)
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS: return {
            ...state,
            comments:action.comments
            }
        case RECEIVE_SINGLE_COMMENT: return {
            ...state,
            currentComment:action.comment
            }
        case UPDATE_COMMENT_VOTESCORE: return updatedCommentsWithVoteChanges(state,action)
        case DELETE_COMMENT:
            return updatedCommentsWithStatusChanges(state,action)
        default: return state

    }
}
