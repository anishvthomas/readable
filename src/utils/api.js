let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

  export const APIgetCategories = () => {
    return fetch('http://localhost:5001/categories', {
          headers: { Authorization: token }
        })
        .then((res) => res.json())
        .then(data =>  data.categories)
  }

  export const APIgetComments = () => {
    return fetch('http://localhost:5001/categories', {
          headers: { Authorization: token }
        })
          .then((res) => res.json())
          .then(data => data.comments)
  }


  export const APIgetPosts = () => {
    return fetch('http://localhost:5001/posts', {
          headers: { Authorization: token }
        })
          .then((res) => res.json())
          .then(data =>  data)
  }

  export const APIaddNewPost = (postData) => {
      return fetch('http://localhost:5001/posts', {
        headers: { Authorization: token ,
                    'Content-Type': "application/json"
                    },
        method: 'POST',
        body: JSON.stringify(postData)})
        .then((res) => res.json())
        .then(data =>  data)

  }

export const APIupdatePost = (postData) => {
    return fetch(`http://localhost:5001/posts/${postData.id}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'PUT',
      body: JSON.stringify(postData)})
      .then((res) => res.json())
      .then(data =>  data)

}

export const APIgetSinglePost = (postid) => {
 return fetch(`http://localhost:5001/posts/${postid}`, {
        headers: { Authorization: token }
      })
      .then((res) => res.json())
      .then(data =>  data)
}

export const APIgetCommentsForPost = (postid) => {
 return fetch(`http://localhost:5001/posts/${postid}/comments`, {
        headers: { Authorization: token }
      })
      .then((res) => res.json())
      .then(data =>  data)
}

export const APIaddNewComment = (commentData) => {
    return fetch('http://localhost:5001/comments', {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(commentData)})
      .then((res) => res.json())
      .then(data =>  data)

}

export const APIupdateVotes = (voteData) => {
    const voteOption = {'option': voteData.option }
    return fetch(`http://localhost:5001/posts/${voteData.postid}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(voteOption)})
      .then((res) => res.json())
      .then(data =>  data)
}


export const APIupdateCommentVotes = (voteData) => {
    const voteOption = {'option': voteData.option }
    return fetch(`http://localhost:5001/comments/${voteData.commentid}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(voteOption)})
      .then((res) => res.json())
      .then(data =>  data)

}


export const APIdeleteComment = (commentid) => {

		return fetch(`http://localhost:5001/comments/${commentid}`, {headers: {'Authorization': token, "Content-Type": "application/json"},
			method: 'DELETE'})
			.then((res) => res)
			.then((res) =>  commentid)
			.catch(error => console.log('error', error));

}

export const APIdeletePost = (postid) => {

		return fetch(`http://localhost:5001/posts/${postid}`, {headers: {'Authorization': token, "Content-Type": "application/json"},
			method: 'DELETE'})
			.then((res) => res)
			.then((res) =>  postid)
			.catch(error => console.log('error', error));

}

export const APIgetSingleComment = (commentid) => {
  return fetch(`http://localhost:5001/comments/${commentid}`, {
        headers: { Authorization: token }
      })
      .then((res) => res.json())
      .then(data =>  data)
}


export const APIupdateComment = (commentData) => {
    return fetch(`http://localhost:5001/comments/${commentData.id}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'PUT',
      body: JSON.stringify(commentData)})
      .then((res) => res.json())
      .then(data =>  data)

}
