import sortBy from 'sort-by';
import { RECEIVE_ALL_COMMENTS, RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, UPDATE_VOTESCORE,SORT_POSTS ,DELETE_POST,
    LOAD_FORMDATA,UPDATE_POST, ADD_POST} from '../actions/types'
const initialState ={
    posts:[],
    currentPost:null
}

const updatedPostsWithVoteChanges = (state,action) => {
    const indexOfUpdatedPost = state.posts.findIndex((postItem) => {
      return postItem.id === action.voteData.id; });
    if( indexOfUpdatedPost >= 0 )
        return {...state,
                ...state.posts[indexOfUpdatedPost].voteScore=action.voteData.voteScore }
    else
        return state
}
const updatedPostsWithStatusChanges = (state,action) => {
    const indexOfDeletedPost = state.posts.findIndex((postItem) => {
      return postItem.id === action.post; });
    if( indexOfDeletedPost >= 0 )
        return {...state,
                ...state.posts[indexOfDeletedPost].deleted=true }
    else
        return state
}
const updateCommentCount= (state,action) => {
    const commentCount = action.comments.length;
    if(commentCount > 0) {
        const parentId = action.comments[0].parentId
        const indexOfPost = state.posts.findIndex((postItem) => {
            return postItem.id === parentId; });

        return {...state,
                ...state.posts[indexOfPost].commentCount=commentCount}

    } else {
        return state
    }
}
const updatedPostsWithChanges = (state,action) => {
    const indexOfUpdatedPost = state.posts.findIndex((postItem) => {
      return postItem.id === action.postData.id; });
    if( indexOfUpdatedPost >= 0 )
        return {...state,
                ...state.posts[indexOfUpdatedPost]=action.postData }
    else
        return state
}
export default function posts(state=initialState,action) {
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            action.posts.forEach((item)=>item.commentCount=0)
            return {
            ...state,
            posts:action.posts.filter((postItem) => postItem.deleted === false).sort(sortBy('-voteScore'))
            }
        case RECEIVE_SINGLE_POST: return {
            ...state,
            currentPost:action.post
            }
        case UPDATE_VOTESCORE: return updatedPostsWithVoteChanges(state,action)
        case SORT_POSTS: return {...state,
                                posts:state.posts.sort(sortBy(action.columnName))}
        case DELETE_POST:
            return updatedPostsWithStatusChanges(state,action)
        case LOAD_FORMDATA:
                return state
        case UPDATE_POST: return updatedPostsWithChanges(state,action)
        case RECEIVE_ALL_COMMENTS: return updateCommentCount(state,action)
        case ADD_POST: action.postData.commentCount=0
                        return {...state,
                                ...state.posts.push(action.postData)}
        default: return state
    }
}
