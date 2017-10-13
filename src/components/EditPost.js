import React from 'react'
import EditPostForm from './EditPostForm';
import { updateExistingPost } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'
import { fetchSinglePost } from '../actions'

class EditPost extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log('EditPost',values);
    values['timestamp']=Date.now()
    values['id']=this.props.postid
    values['voteScore']= this.props.currentpost.voteScore

    this.props.updatePost(values)
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
    return {
        postid: postid,
        currentpost:state.posts.currentPost,

    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadSinglePost: (postid) => dispatch(fetchSinglePost(postid)),
    updatePost: values => dispatch(updateExistingPost(values))
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
