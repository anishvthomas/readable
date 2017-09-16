import React from 'react'
import EditPostForm from './EditPostForm';
import { addNewPost } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'
import { fetchSinglePost } from '../actions'

class EditPost extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log('EditPost',values);
    values['timestamp']=Date.now()
    values['id']=uuid()
    values['voteScore']= 0
    console.log('NewPost enchanced',values);
    this.props.createNewPost(values)
    this.props.history.push(`/`);

 }
 componentDidMount=()=> {
     console.log("EditPost componentDidMount:",this.props)
     this.props.loadSinglePost(this.props.postid)

 }
  render() {
    console.log("EditPostprops",this.props)
    return (
      <EditPostForm class= 'container' onSubmit={this.submit} data={this.props.currentpost}/>
    );
  }
}




function mapStateToProps(state,ownprops){
    const postid = ownprops.match.params.postid;

    console.log('PostDetail====>state',state)
    console.log('PostDetail=====>ownprops',ownprops)
    //console.log('=====>state.posts.currentPost',state.posts.currentPost)
    //console.log('=====>state.posts.comments',state.posts.comments)
    return {
        postid: postid,
        currentpost:state.posts.currentPost,

    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadSinglePost: (postid) => dispatch(fetchSinglePost(postid)),
    createNewPost: values => dispatch(addNewPost(values))
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
