import React ,{ Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import './NewPostForm.css'
import { loadCommentFormData } from '../actions'
import { connect } from 'react-redux'


class EditCommentForm extends Component
{
    componentWillMount=()=> {
            this.props.load(this.props.data)
    }
    render()
    {
        const { error, handleSubmit, pristine, reset, submitting, categories } = this.props;
        return (
          <div className='container app'>
          <h1> Edit Comment </h1>
             <form className='form-horizontal' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='col-2 control-label' for="author">Author</label>
                    <div className='col-10'>
                        <Field name="author" className="col-10" component="input" type="text" placeholder="Author"/>
                    </div>
                </div>

                <div className='form-group'>
                    <label className='col-2 control-label' for="body">Body</label>
                    <div className='col-10'>
                        <Field name="body" className="col-10" component="textarea" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Post</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
                </div>
            </form>

        </div>
      );
  }
};
// Decorate the form component

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditCommentForm = reduxForm({
  form: 'submitEditComment', // a unique identifier for this form
  enableReinitialize : true
})(EditCommentForm)

function mapStateToProps(state,ownprops){
    return {
        initialValues:state.comments.currentComment,
        categ:state.categories
    }
}
function mapDispatchToProps (dispatch) {
  return {
    load: values => dispatch(loadCommentFormData(values))
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm)
