import React ,{ Component} from 'react'
import './PostDetail.css'
import { fetchSinglePost, fetchAllComments } from '../actions'
import { connect } from 'react-redux'
import Comments from './Comments'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class PostDetail extends Component {

    componentDidMount=()=> {
        console.log("PostDetail componentDidMount:",this.props)
        this.props.loadSinglePost(this.props.postid)
        this.props.loadComments(this.props.postid)

    }
    render () {
        //console.log('*****PostDetailrender***** props',this.props)
        //console.log('*****render***** ',this.props.currentpost)
        const {comments} =this.props.comments
        console.log('*****PostDetailrender***** comments',comments)
        console.log('*****PostDetailrender***** comments.length',comments.length)

    return (
        <div className='container postdetail'>

            <h1>{this.props.currentpost && this.props.currentpost.title}</h1>
            <span > by {this.props.currentpost && this.props.currentpost.author}</span>
             <span>  on {this.props.currentpost && new Date(this.props.currentpost.timestamp).toString()}</span>
            <span> in {this.props.currentpost && this.props.currentpost.category}</span>
            <p>{this.props.currentpost && this.props.currentpost.body} </p>

            <button className="btn btn-skyblue"><i className="fa fa-thumbs-o-up"></i>{this.props.currentpost && this.props.currentpost.voteScore}</button>
            <Link to={`/edit/post/${this.props.postid}`}>  <Button  bsStyle="primary"> Edit Post</Button>  </Link>
              <button className="btn btn-skyblue" onClick={()=>this.props.history.goBack()}>
                <i className="fa fa-reply"></i> Go Back
              </button>

            {<Comments />}
            <Link to={`/create/comment/${this.props.postid}`} >  <Button  bsStyle="primary"> Post a Comment</Button>  </Link>

        </div>
    )}

}

function mapStateToProps(state,ownprops){
    const postid = ownprops.match.params.postid;
    const category=ownprops.match.params.categories
    console.log('PostDetail====>state',state)
    console.log('PostDetail=====>ownprops',ownprops)
    //console.log('=====>state.posts.currentPost',state.posts.currentPost)
    //console.log('=====>state.posts.comments',state.posts.comments)
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
    loadComments:(postid) => dispatch(fetchAllComments(postid))
  }
 }
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
