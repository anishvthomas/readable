import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './Posts.css'
import { connect } from 'react-redux'
import { updateCommentVotes, deleteComment } from '../actions'
class Comments extends Component {
    submitVote = (commentid, votedirection) => {
      // Do something with the form values
      var values ={}
      console.log('Comments submitVote',values);
      values['option']= votedirection
      values['commentid']= commentid
      console.log('Comments submitVote enchanced',values);
     this.props.changeVote(values)
    }

    render ()
{
    const {allComments}= this.props

    return (
        <div className='container posts'>
        Comments
        <table className="table" style={{border:1}}>
          <thead>
          <tr>
            <th className='title'>Title</th>
            <th className='author'>Author</th>
            <th className='datePosted'><a href="" >Posted On<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
            <th className='votescore'> <a href="">Upvotes<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
          </tr>
          </thead>
          <tbody>
          {allComments.comments.filter((commentItem) => commentItem.deleted === false).map((commentItem)=>
             <tr key={commentItem.id}>
              <td className='title'>
              <Link to={{pathname: `/edit/comment/${commentItem.id}`}}>{commentItem.body}</Link>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.deleteSelected(commentItem.id)}></i>

            </td>
              <td className='author'>{commentItem.author}</td>
              <td className='datePosted'>{new Date(commentItem.timestamp).toString()}</td>
              {/*<td className='votescore'>{commentItem.voteScore}</td>*/}
              <td className='votescore'><i className="fa fa-thumbs-o-up thumbs-up" aria-hidden="true" onClick={() => this.submitVote(commentItem.id,"upVote")}>  </i>
              <span className="votescore">  {commentItem.voteScore}  </span>
                <i className="fa fa-thumbs-o-down thumbs-down" aria-hidden="true" onClick={() => this.submitVote(commentItem.id,"downVote")} ></i>
              </td>

              </tr>
          )}
          </tbody>
          </table>


        </div>
    )}
}
function mapStateToProps(state,ownprops){
    return {
        currentpost:state.posts.currentPost,
        allComments: state.comments
    }
}
function mapDispatchToProps (dispatch) {
  return {
      changeVote:(voteData) => dispatch(updateCommentVotes(voteData)),
      deleteSelected:(postid) => dispatch(deleteComment(postid))

  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
