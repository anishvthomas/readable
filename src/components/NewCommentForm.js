import React, { Component} from 'react';
import './NewPostForm.css'
import {Link} from 'react-router-dom'
class NewCommentForm extends Component  {
    handleSubmit =(e) => {
        e.preventDefault()
        console.log(' NewCommentForme',e)
        const author = this.authorInput.value
        console.log('author',author)
        const body = this.bodyInput.value
        console.log('body',body)
        const values = {author,
        body}
        console.log('NewCommentForm this.props',this.props)
        this.props.submitForm(values)
    }
   render () {
       return (
      <div className='container'>
      <h1> Post a Comment </h1>
    {/*<Link to={`/${category}/${parentId}`}>Close</Link>*/}
    <form className="form-vertical" onSubmit={this.handleSubmit}>
      <div>
      <label>Author</label>
      <input type="text" name="author" placeholder="Author"
      ref={(thisInput) => {this.authorInput = thisInput}}/>
      </div>
      <div>
      <label>Body</label><textarea name="body" placeholder="Body"
      ref={(thisInput) => {this.bodyInput = thisInput}}></textarea>
      </div>
      <button>Submit</button>

    </form>
    </div>
  );}
};

export default NewCommentForm
