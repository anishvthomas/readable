let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

  export const APIgetCategories = () => {
      console.log("APIgetCategories",token)
    return fetch('http://localhost:5001/categories', {
          headers: { Authorization: token }
        })
          .then((res) => { console.log("fetch localhost:5001/categories",res)
              return res.json()})
          .then(data => {  console.log("fetch localhost:5001/categories:d => ",data)
              return data.categories})
  }

  export const APIgetComments = () => {
      console.log("APIgetComments")
    return fetch('http://localhost:5001/categories', {
          headers: { Authorization: token }
        })
          .then((res) => res.json())
          .then(data => data.comments)
  }


  export const APIgetPosts = () => {
      console.log("APIgetPosts",token)
    return fetch('http://localhost:5001/posts', {
          headers: { Authorization: token }
        })
          .then((res) => { console.log("fetch localhost:5001/posts",res)
              return res.json()})
          .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
              return data})
  }

  export const APIaddNewPost = (postData) => {
      console.log("$$$$$$$$$$$APIaddNewPost",postData)
      return fetch('http://localhost:5001/posts', {
        headers: { Authorization: token ,
                    'Content-Type': "application/json"
                    },
        method: 'POST',
        body: JSON.stringify(postData)})
        .then((res) => { console.log("fetch localhost:5001/posts",res)
              return res.json()})
        .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
              return data})

  }


export const APIgetSinglePost = (postid) => {
    console.log("APIgetSinglePost",postid)
  return fetch(`http://localhost:5001/posts/${postid}`, {
        headers: { Authorization: token }
      })
        .then((res) => { console.log("fetch localhost:5001/posts",res)
            return res.json()})
        .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
            return data})
}

export const APIgetCommentsForPost = (postid) => {
    console.log("APIgetCommentsForPost",postid)
  return fetch(`http://localhost:5001/posts/${postid}/comments`, {
        headers: { Authorization: token }
      })
        .then((res) => { console.log("fetch localhost:5001/postid/comment",res)
            return res.json()})
        .then(data => { console.log("fetch localhost:5001/postid/comment.comments => ",data)
            return data})
}

export const APIaddNewComment = (commentData) => {
    console.log("$$$$$$$$$$$APIaddNewComment",commentData)
    return fetch('http://localhost:5001/comments', {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(commentData)})
      .then((res) => { console.log("fetch localhost:5001/posts",res)
            return res.json()})
      .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
            return data})

}

export const APIupdateVotes = (voteData) => {
    console.log("$$$$$$$$$$$APIupdateVotes:voteData",voteData)
    const voteOption = {'option': voteData.option }
    console.log("$$$$$$$$$$$APIupdateVotes: option",voteOption)
    return fetch(`http://localhost:5001/posts/${voteData.postid}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(voteOption)})
      .then((res) => { console.log("fetch localhost:5001/posts",res)
            return res.json()})
      .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
            return data})

}


export const APIupdateCommentVotes = (voteData) => {
    console.log("$$$$$$$$$$$APIupdateVotes:voteData",voteData)
    const voteOption = {'option': voteData.option }
    console.log("$$$$$$$$$$$APIupdateVotes: option",voteOption)
    return fetch(`http://localhost:5001/comments/${voteData.commentid}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'POST',
      body: JSON.stringify(voteOption)})
      .then((res) => { console.log("fetch localhost:5001/posts",res)
            return res.json()})
      .then(data => { console.log("fetch localhost:5001/posts:d.posts => ",data)
            return data})

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

/*export const APIdeletePost = (postid) => {
    console.log("APIdeletePost",postid)
    return fetch(`http://localhost:5001/posts/${postid}`, {
      headers: { Authorization: token ,
                  'Content-Type': "application/json"
                  },
      method: 'DELETE'})
      .then((res) => { console.log("fetch localhost:5001/posts res->",res)
            return res.json()})
      .then(data => { console.log("fetch localhost:5001/posts data-> => ",data)
            return data})
     .catch(error => console.log('APIdeletePosterror', error));

}*/
