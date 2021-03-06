import React from 'react'
import EditCommentForm from './EditCommentForm';
import { updateExistingComment } from '../actions'
import { connect } from 'react-redux'
import { fetchSingleComment } from '../actions'

class EditComment extends React.Component {
  submit = (values) => {
    let formValue={}
    // Do something with the form values
    
    formValue['timestamp']=Date.now()
    formValue['id']=this.props.commentid
    formValue['author']=values.author
    formValue['body']=values.body
    this.props.updateComment(formValue)
    this.props.history.goBack()

 }
 componentDidMount=()=> {

     this.props.loadSingleComment(this.props.commentid)

 }
  render() {

    return (
      <EditCommentForm class= 'container' onSubmit={this.submit} data={this.props.commentid}/>
    );
  }
}




function mapStateToProps(state,ownprops){
    const commentid = ownprops.match.params.commentid;
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
