import React from 'react'
import EditCommentForm from './EditCommentForm';
import { updateExistingComment } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'
import { fetchSingleComment } from '../actions'

class EditComment extends React.Component {
  submit = (values) => {
    let formValue={}
    // Do something with the form values
    console.log('EditComment',values);
    formValue['timestamp']=Date.now()
    formValue['id']=this.props.commentid
    formValue['author']=values.author
    formValue['body']=values.body
    console.log('EditComment enchanced',formValue);
    this.props.updateComment(formValue)
    this.props.history.push(`/`);

 }
 componentDidMount=()=> {
     console.log("EditComment componentDidMount:",this.props)
     this.props.loadSingleComment(this.props.commentid)

 }
  render() {
    console.log("EditCommentprops",this.props)
    return (
      <EditCommentForm class= 'container' onSubmit={this.submit} data={this.props.commentid}/>
    );
  }
}




function mapStateToProps(state,ownprops){
    const commentid = ownprops.match.params.commentid;

    console.log('EditComment====>state',state)
    console.log('EditComment=====>ownprops',ownprops)
    //console.log('=====>state.posts.currentPost',state.posts.currentPost)
    //==console.log('=====>commentid',commentid)
    return {
        commentid:commentid,

    }
}
function mapDispatchToProps (dispatch) {
  return {
    loadSingleComment: (postid) => dispatch(fetchSingleComment(postid)),
    updateComment: values => dispatch(updateExistingComment(values))
   }
 }
 export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
