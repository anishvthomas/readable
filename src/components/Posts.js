import React ,{ Component } from 'react'
import {Link} from 'react-router-dom'
import './Posts.css'
import { updateVotes  } from '../actions'
import { sortData, deletePost, fetchAllComments } from '../actions'
import { connect } from 'react-redux'

class Posts extends Component {
    state = {
        sortDateDirection: 1,
        sortVoteDirection: 1
    }
    submitVote = (postid, votedirection) => {
      // Do something with the form values
      var values ={}
      values['option']= votedirection
      values['postid']= postid
     this.props.changeVote(values)
    }
    doSortByDate= (event) => {
        event.preventDefault()
        const sortColumn = this.state.sortDateDirection> 0?'timestamp':'-timestamp'
        this.setState(()=>({sortDateDirection: this.state.sortDateDirection * -1}))
        this.props.sortPostData(sortColumn)
    }

     doSortByVote = (event) => {
         event.preventDefault()
         const sortColumn = this.state.sortVoteDirection> 0?'voteScore':'-voteScore'
         this.setState(()=>({sortVoteDirection: this.state.sortVoteDirection * -1}))
         this.props.sortPostData(sortColumn)

     }
     componentDidMount () {
         this.getPostIDS()
         this.props.loadAllComments(this.getPostIDS())
         //this.getPostIDS()
     }
     getPostIDS () {
         const arr = this.props.allPosts.posts.reduce((accum,value)=>{return accum.concat(value.id)},[])
         return arr
     }
    render ()
    {
        const {allPosts}= this.props
        return (
            <div className='container posts'>
            <h1>Posts</h1>
            <table className="table" style={{border:1}}>
            <thead>
            <tr>
            <th className='title'>Title</th>
            <th className='author'>Author</th>
            <th className='datePosted'><a href="" onClick={this.doSortByDate}>Posted On<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
            <th className='votescore'> <a href="" onClick={this.doSortByVote} >Upvotes<span style={{marginLeft: '5px'}} className="fa fa-sort"></span></a></th>
            <th className='votescore'>Comments</th>
            </tr>
            </thead>
            <tbody>
            {   allPosts.posts.filter((postItem) => { if(this.props.category==="")
                                                        return postItem.deleted === false
                                                      else
                                                        return (postItem.deleted === false && postItem.category===this.props.category)

                                                    }
                                        ).map((postItem)=>
                <tr key={postItem.id}>
                <td className='title'>
                <Link to={{pathname: `/${postItem.category}/${postItem.id}`}}>{postItem.title}</Link>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.props.deleteSelected(postItem.id)}></i>

                <Link to={`/edit/post/${postItem.id}`}>  <i className="fa fa-pencil-square-o" aria-hidden="true"></i>  </Link>

                </td>
                <td className='author'>{postItem.author}</td>
                <td className='datePosted'>{new Date(postItem.timestamp).toString()}</td>

                <td className='votescore'><i className="fa fa-thumbs-o-up thumbs-up" aria-hidden="true" onClick={() => this.submitVote(postItem.id,"upVote")}>  </i>
                <span className="votescore">  {postItem.voteScore}  </span>
                 <i className="fa fa-thumbs-o-down thumbs-down" aria-hidden="true" onClick={() => this.submitVote(postItem.id,"downVote")} ></i>
                </td>
                <td className='author'>{postItem.commentCount}</td>

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
    return {
        postid: postid,
        allPosts: state.posts,
        currentpost:state.posts.currentPost,
        category: ownprops.category
    }
}
function mapDispatchToProps (dispatch) {
  return {
      changeVote:(voteData) => dispatch(updateVotes(voteData)),
      sortPostData:(columnName) => dispatch(sortData(columnName)),
      deleteSelected:(postid) => dispatch(deletePost(postid)),
      loadAllComments:(postList)=>dispatch(fetchAllComments(postList))
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
