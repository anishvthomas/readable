import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import './Posts.css'
import { updateVotes } from '../actions'
import { sortData, deletePost } from '../actions'
import { connect } from 'react-redux'

class Posts extends Component {
    submitVote = (postid, votedirection) => {
      // Do something with the form values
      var values ={}
      console.log('submitVote',values);
      values['option']= votedirection
      values['postid']= postid
      console.log('submitVote enchanced',values);
     this.props.changeVote(values)
 }
doSortByDate= (event) => {
    event.preventDefault()
    window.alert('voteScore')

    this.props.sortPostData('voteScore')
    console.log('doSort^^^^^^^^^^^^^^^^^^^')
    }

 doSortByVote = (event) => {
     event.preventDefault()
     this.props.sortPostData('datePosted')
     console.log('doSort^^^^^^^^^^^^^^^^^^^')
     }
    render ()
    {
        const {allPosts}= this.props
        console.log("Posts:props=> ",allPosts.posts.length)
        //console.log("Posts:posts allPosts ",allPosts)
        return (
            <div className='container posts'>
            Posts
            <table className="table" style={{border:1}}>
            <thead>
            <tr>
            <th className='title'>Title</th>
            <th className='author'>Author</th>
            <th className='datePosted'><a href="" onClick={this.doSortByDate}>Posted On<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
            <th className='votescore'> <a href="" onClick={this.doSortByVote} >Upvotes<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
            </tr>
            </thead>
            <tbody>
            {allPosts.posts.filter((postItem) => postItem.deleted === false).map((postItem)=>
                <tr key={postItem.id}>
                <td className='title'>
                <Link to={{pathname: `/${postItem.category}/${postItem.id}`}}>{postItem.title}</Link>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.deleteSelected(postItem.id)}></i>
                </td>
                <td className='author'>{postItem.author}</td>
                <td className='datePosted'>{new Date(postItem.timestamp).toString()}</td>

                <td className='votescore'><i className="fa fa-thumbs-o-up thumbs-up" aria-hidden="true" onClick={() => this.submitVote(postItem.id,"upVote")}>  </i>
                <span className="votescore">  {postItem.voteScore}  </span>
                  <i className="fa fa-thumbs-o-down thumbs-down" aria-hidden="true" onClick={() => this.submitVote(postItem.id,"downVote")} ></i>
                </td>

                </tr>
            )}
            </tbody>
            </table>
            </div>
        )
    }
}

function mapStateToProps(state,ownprops){
    const postid = 1//ownprops.match.params.postid;
    console.log('Posts====>state',state)
    console.log('Posts=====>ownprops',ownprops)
    return {
        postid: postid,
        allPosts: state.posts,
        currentpost:state.posts.currentPost,
    }
}
function mapDispatchToProps (dispatch) {
  return {
      changeVote:(voteData) => dispatch(updateVotes(voteData)),
      sortPostData:(columnName) => dispatch(sortData(columnName)),
      deleteSelected:(postid) => dispatch(deletePost(postid))
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
