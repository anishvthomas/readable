import React ,{ Component} from 'react'
import './PostDetail.css'
import { fetchSinglePost, fetchComments, deletePost, updateVotes } from '../actions'
import { connect } from 'react-redux'
import Comments from './Comments'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class PostDetail extends Component {

    componentDidMount=()=> {
        this.props.loadSinglePost(this.props.postid)
        this.props.loadComments(this.props.postid)

    }
    submitVote = (postid, votedirection) => {
      // Do something with the form values
      var values ={}
      values['option']= votedirection
      values['postid']= postid
     this.props.changeVote(values)
    }
    render () {
        const {comments} =this.props.comments
        if(this.props.currentpost && this.props.currentpost.title===undefined)
        {
            return (
                <div className='container postdetail'>
                    <h1> Post was deleted </h1>
                </div>
            )

        }
        return (
        <div className='container postdetail'>

            <h1>{this.props.currentpost && this.props.currentpost.title}</h1>
            <span > by {this.props.currentpost && this.props.currentpost.author}</span>
             <span>  on {this.props.currentpost && new Date(this.props.currentpost.timestamp).toString()}</span>
            <span> in {this.props.currentpost && this.props.currentpost.category}</span>
            <p>{this.props.currentpost && this.props.currentpost.body} </p>

            <i className="fa fa-thumbs-o-up thumbs-up" aria-hidden="true" onClick={() => this.submitVote(this.props.postid,"upVote")}>  </i>
            <span className="votescore">  {this.props.currentpost && this.props.currentpost.voteScore}  </span>
             <i className="fa fa-thumbs-o-down thumbs-down" aria-hidden="true" onClick={() => this.submitVote(this.props.postid,"downVote")} ></i>

            {/* <button className="btn btn-skyblue"><i className="fa fa-thumbs-o-up"></i>{this.props.currentpost && this.props.currentpost.voteScore}</button> */}
            <Link to={`/edit/post/${this.props.postid}`}>  <Button  bsStyle="primary"> Edit Post</Button>  </Link>
            <Button  bsStyle="danger" onClick={()=>{this.props.deleteSelected(this.props.postid); this.props.history.goBack()}}> Delete Post</Button>
              <button className="btn btn-skyblue" onClick={()=>this.props.history.goBack()}>
                <i className="fa fa-reply"></i> Go Back
              </button>
              <p>Comments :{comments.filter((commentItem) => commentItem.deleted === false).length} </p>
            {<Comments />}
            <Link to={`/create/comment/${this.props.postid}`} >  <Button  bsStyle="primary"> Post a Comment</Button>  </Link>

        </div>
    )}

}

function mapStateToProps(state,ownprops){
    const postid = ownprops.match.params.postid;
    const category=ownprops.match.params.categories
    return {
        postid: postid,
        currentpost:state.posts.currentPost,
        comments: state.comments,
        category:category,
    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadSinglePost: (postid) => dispatch(fetchSinglePost(postid)),
    loadComments:(postid) => dispatch(fetchComments(postid)),
    deleteSelected:(postid) => dispatch(deletePost(postid)),
    changeVote:(voteData) => dispatch(updateVotes(voteData)),


  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
