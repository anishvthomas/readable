import React from 'react'
import NewCommentForm from './NewCommentForm';
import { addNewComment } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'

class NewComment extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log('NewComment submit',values);
    values['timestamp']=Date.now()
    values['id']=uuid()
    values['voteScore']= 0
    values['parentId']=this.props.postid
    console.log('NewComment enchanced',values);
    this.props.createNewComment(values)
    this.props.history.goBack()
    //this.props.history.push(`/$(category)/${parentId}`);
    //this.props.history.push(`/`);
 }
  render() {
    console.log("NewComment props",this.props)
    return (
      <NewCommentForm className= 'container' submitForm={this.submit} />
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
    console.log("NewCommentsmapStateToProps state",state)
    console.log("NewCommentsmapStateToProps ownprops",ownprops)
    return {
        categories: categories,
        posts: posts,
        postid:ownprops.match.params.postid
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewComment)
