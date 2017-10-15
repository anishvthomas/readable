import React from 'react'
import NewCommentForm from './NewCommentForm';
import { addNewComment } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'

class NewComment extends React.Component {
  submit = (values) => {
    // Do something with the form values

    values['timestamp']=Date.now()
    values['id']=uuid()
    values['voteScore']= 0
    values['parentId']=this.props.postid
    console.log('NewComment enchanced',values);
    this.props.createNewComment(values)
    this.props.history.goBack()
 }
  render() {

    return (
      <NewCommentForm className= 'container' submitForm={this.submit} history={this.props.history}/>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createNewComment: values => dispatch(addNewComment(values))
  }
}
function mapStateToProps(state,ownprops){
    const {categories, posts}= state
    return {
        categories: categories,
        posts: posts,
        postid:ownprops.match.params.postid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
