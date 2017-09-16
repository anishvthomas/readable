import sortBy from 'sort-by';
import { RECEIVE_ALL_POSTS, RECEIVE_SINGLE_POST, UPDATE_VOTESCORE,SORT_POSTS ,DELETE_POST, LOAD_FORMDATA} from '../actions'
const initialState ={
    posts:[],
    currentPost:null
}



const updatedPostsWithVoteChanges = (state,action) => {
    console.log('updatedPostsWithVoteChanges:action count: ',state.posts.length)
    const indexOfUpdatedPost = state.posts.findIndex((postItem) => {
      return postItem.id === action.voteData.id; });
      //console.log('indexOfUpdatedPostaction.voteData.id',action.voteData.id)
      //console.log('indexOfUpdatedPost',indexOfUpdatedPost)
    if( indexOfUpdatedPost >= 0 )
        return {...state,
                ...state.posts[indexOfUpdatedPost].voteScore=action.voteData.voteScore }
    else
        return state
}
const updatedPostsWithStatusChanges = (state,action) => {
    console.log('updatedPostsWithStatusChanges:action count: ',state.posts.length)
    const indexOfDeletedPost = state.posts.findIndex((postItem) => {
      return postItem.id === action.post; });
     // console.log('indexOfDeletedPost:action',action)
     // console.log('indexOfDeletedPost',indexOfDeletedPost)
    if( indexOfDeletedPost >= 0 )
        return {...state,
                ...state.posts[indexOfDeletedPost].deleted=true }
    else
        return state
}
export default function posts(state=initialState,action) {
    //console.log(" posts:reducer ****action:",action)
    //console.log("categories:reducer ****state:",state)
    switch (action.type) {
        case RECEIVE_ALL_POSTS: return {
            ...state,
            posts:action.posts.filter((postItem) => postItem.deleted === false)
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
        default: return state
    }
}
