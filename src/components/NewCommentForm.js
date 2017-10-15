import React, { Component} from 'react';
import './NewPostForm.css'

class NewCommentForm extends Component  {
    handleSubmit =(e) => {
        e.preventDefault()
        const author = this.authorInput.value
        const body = this.bodyInput.value
        const values = {author,
        body}
        this.props.submitForm(values)
    }


    render () {
        console.log("this.props",this.props)
        return (
            <div className='container app'>
                <h1> Post a Comment </h1>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-2 control-label'>Author</label>
                        <div className='col-10'>
                            <input type="text" name="author" placeholder="Author"
                            ref={(thisInput) => {this.authorInput = thisInput}}/>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-2 control-label'>Body</label>
                        <div className='col-10'>
                            <textarea name="body" placeholder="Body"
                            ref={(thisInput) => {this.bodyInput = thisInput}}></textarea>
                        </div>
                    </div>

                    <button  className="btn btn-success">Submit</button>
                    <button  className="btn btn-danger" onClick={()=>this.props.history.goBack()}>Cancel</button>

                </form>
            </div>
        )
    }
};

export default NewCommentForm
