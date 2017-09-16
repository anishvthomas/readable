import * as API from '../utils/api.js'


export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receiveCategories = categories => ({
type: RECEIVE_CATEGORIES,
categories
});

export const fetchCategories = () => dispatch => (
    API.APIgetCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export const receiveAllPosts = posts => ({
type: RECEIVE_ALL_POSTS,
posts
});

export const fetchPosts = () => dispatch => (
    API.APIgetPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'

export const receiveComments = comments => ({
type: RECEIVE_ALL_COMMENTS,
comments
});

export const fetchAllComments = (postid) => dispatch => (
    API.APIgetCommentsForPost(postid)
    .then(comments => dispatch(receiveComments(comments)))
);

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT'

export const ADD_POST = 'ADD_POST'

export const addPost = postData => ({
type: ADD_POST,
postData
});

export const addNewPost = (postData) => dispatch => {
    console.log('addNewPost')
    API.APIaddNewPost(postData)
    .then((postData) => dispatch(addPost(addNewPost)))
};

export const ADD_COMMENT = 'ADD_COMMENT'

export const addComment = commentData => ({
type: ADD_COMMENT,
commentData
});

export const addNewComment = (commentData) => dispatch => {
    console.log('addNewComment')
    API.APIaddNewComment(commentData)
    .then((postData) => dispatch(addComment(postData)))
};

export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

export const receiveSinglePost = post => ({
type: RECEIVE_SINGLE_POST,
post
});

export const fetchSinglePost = (postid) => dispatch => (
    API.APIgetSinglePost(postid)
    .then(post => dispatch(receiveSinglePost(post)))
);

export const UPDATE_VOTESCORE = 'UPDATE_VOTESCORE'

export const updateVotescore = voteData => ({
type: UPDATE_VOTESCORE,
voteData
});

export const updateVotes = (voteData) => dispatch => {
    console.log('voteData')
    API.APIupdateVotes(voteData)
    .then((voteData) => dispatch(updateVotescore(voteData)))
};
export const UPDATE_COMMENT_VOTESCORE = 'UPDATE_COMMENT_VOTESCORE'

export const updateCommentVotescore = voteData => ({
type: UPDATE_COMMENT_VOTESCORE,
voteData
});

export const updateCommentVotes = (voteData) => dispatch => {
    console.log('voteData')
    API.APIupdateCommentVotes(voteData)
    .then((voteData) => dispatch(updateCommentVotescore(voteData)))
};

export const SORT_POSTS = 'SORT_POSTS'

export const sortPosts = columnName => ({
type: SORT_POSTS,
columnName
});

export const sortData = (columnName) => dispatch => {
    console.log('sortData&&&&&&&&&&&&&&&&&')
 dispatch(sortPosts(columnName))
};

export const DELETE_POST = 'DELETE_POST'

export const deleteSinglePost = post => ({
type: DELETE_POST,
post
});

export const deletePost = (postid) => dispatch => (
    API.APIdeletePost(postid)
    .then(post => dispatch(deleteSinglePost(post)))
);

export const DELETE_COMMENT = 'DELETE_COMMENT'

export const deleteSingleComment = comment => ({
type: DELETE_COMMENT,
comment
});

export const deleteComment = (commentid) => dispatch => (
    API.APIdeleteComment(commentid)
    .then(comment => dispatch(deleteSingleComment(comment)))
);

export const LOAD_FORMDATA = 'LOAD_FORMDATA'

export const loadForm = data => (
{ type: LOAD_FORMDATA,
    data }
)
export const loadFormData = (data) => dispatch => {
    console.log('loadFormData&&&&&&&&&&&&&&&&&')
    dispatch(loadForm(data))
};




export const UPDATE_POST = 'UPDATE_POST'

export const updatePost = postData => ({
type: UPDATE_POST,
postData
});

export const updateExistingPost = (postData) => dispatch => {
    console.log('updateExistingPost',postData)
    API.APIupdatePost(postData)
    .then((postData) => dispatch(updatePost(postData)))
};
