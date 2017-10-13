import React from 'react'
import NewPostForm from './NewPostForm';
import { addNewPost } from '../actions'
import { connect } from 'react-redux'
import uuid from 'uuid/v1'

class NewPost extends React.Component {
  submit = (values) => {
    // Do something with the form values
    values['timestamp']=Date.now()
    values['id']=uuid()
    values['voteScore']= 0
    this.props.createNewPost(values)
    this.props.history.push(`/`);

 }
 cancel=()=>{
     this.props.history.push(`/`);
 }
  render() {
    return (
      <NewPostForm class= 'container' onSubmit={this.submit} categorylist={this.props.categories} handleCancel={this.cancel}/>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createNewPost: values => dispatch(addNewPost(values))
  }
}
function mapStateToProps(state){
    const {categories, posts}= state
    return {
        categories: categories,
        posts: posts,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
