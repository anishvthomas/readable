import * as API from '../utils/api.js'
import { RECEIVE_CATEGORIES, RECEIVE_ALL_POSTS, RECEIVE_COMMENTS,
  ADD_POST, ADD_COMMENT, RECEIVE_SINGLE_POST, UPDATE_VOTESCORE,
  UPDATE_COMMENT_VOTESCORE, SORT_POSTS, DELETE_COMMENT, LOAD_FORMDATA,
  LOAD_COMMENT_FORMDATA, UPDATE_POST, RECEIVE_SINGLE_COMMENT, UPDATE_COMMENT,
  RECEIVE_ALL_COMMENTS, DELETE_POST, SORT_COMMENTS } from './types'

export const receiveCategories = categories => ({
type: RECEIVE_CATEGORIES,
categories
});

export const fetchCategories = () => dispatch => (
    API.APIgetCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);

export const receiveAllPosts = posts => ({
type: RECEIVE_ALL_POSTS,
posts
});

export const fetchPosts = () => dispatch => (
    API.APIgetPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);


export const receiveComments = comments => ({
type: RECEIVE_COMMENTS,
comments
});

export const  fetchComments= (postid) => dispatch => (
    API.APIgetCommentsForPost(postid)
    .then(comments => dispatch(receiveComments(comments)))
);
//


export const receiveAllComments = comments => ({
type: RECEIVE_ALL_COMMENTS,
comments
});
export const  fetchAllComments= (postList) => dispatch => (
    postList.forEach((postid)=>{ API.APIgetCommentsForPost(postid)
    .then(comments => dispatch(receiveAllComments(comments)))})

);

export const addPost = postData => ({
type: ADD_POST,
postData
});

export const addNewPost = (postData) => dispatch => {

    API.APIaddNewPost(postData)
    .then((postData) => dispatch(addPost(postData)))
};


export const addComment = commentData => ({
type: ADD_COMMENT,
commentData
});

export const addNewComment = (commentData) => dispatch => {

    API.APIaddNewComment(commentData)
    .then((postData) => dispatch(addComment(postData)))
};


export const receiveSinglePost = post => ({
type: RECEIVE_SINGLE_POST,
post
});

export const fetchSinglePost = (postid) => dispatch => (
    API.APIgetSinglePost(postid)
    .then(post => dispatch(receiveSinglePost(post)))
);


export const updateVotescore = voteData => ({
type: UPDATE_VOTESCORE,
voteData
});

export const updateVotes = (voteData) => dispatch => {

    API.APIupdateVotes(voteData)
    .then((voteData) => dispatch(updateVotescore(voteData)))
};

export const updateCommentVotescore = voteData => ({
type: UPDATE_COMMENT_VOTESCORE,
voteData
});

export const updateCommentVotes = (voteData) => dispatch => {

    API.APIupdateCommentVotes(voteData)
    .then((voteData) => dispatch(updateCommentVotescore(voteData)))
};


export const sortPosts = columnName => ({
type: SORT_POSTS,
columnName
});

export const sortData = (columnName) => dispatch => {

 dispatch(sortPosts(columnName))
};

export const sortComments = columnName => ({
type: SORT_COMMENTS,
columnName
});

export const sortCommentsData = (columnName) => dispatch => {

 dispatch(sortComments(columnName))
};


export const deleteSinglePost = post => ({
type: DELETE_POST,
post
});

export const deletePost = (postid) => dispatch => (
    API.APIdeletePost(postid)
    .then(post => dispatch(deleteSinglePost(post)))
);


export const deleteSingleComment = comment => ({
type: DELETE_COMMENT,
comment
});

export const deleteComment = (commentid) => dispatch => (
    API.APIdeleteComment(commentid)
    .then(comment => dispatch(deleteSingleComment(comment)))
);


export const loadForm = data => (
{ type: LOAD_FORMDATA,
    data }
)
export const loadFormData = (data) => dispatch => {

    dispatch(loadForm(data))
};

export const loadCommentForm = data => (
{ type: LOAD_COMMENT_FORMDATA,
    data
}
)
export const loadCommentFormData = (data) => dispatch => {

    dispatch(loadCommentForm(data))
};

export const updatePost = postData => ({
type: UPDATE_POST,
postData
});

export const updateExistingPost = (postData) => dispatch => {

    API.APIupdatePost(postData)
    .then((postData) => dispatch(updatePost(postData)))
};


export const receiveSingleComment = comment => ({
type: RECEIVE_SINGLE_COMMENT,
comment
});

export const fetchSingleComment = (commentid) => dispatch => (
    API.APIgetSingleComment(commentid)
    .then(comment => dispatch(receiveSingleComment(comment)))
);


export const updateComment = commentData => ({
type: UPDATE_COMMENT,
commentData
});

export const updateExistingComment = (commentData) => dispatch => {

    API.APIupdateComment(commentData)
    .then((postData) => dispatch(updateComment(commentData)))
};
