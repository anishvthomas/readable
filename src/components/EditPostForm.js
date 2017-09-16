import React ,{ Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import './NewPostForm.css'
import { loadFormData } from '../actions'
import { connect } from 'react-redux'


class EditPostForm extends Component
{
    componentDidMount=()=> {
            this.props.load()

    }
render()
{  const { error, handleSubmit, pristine, reset, submitting, categories } = this.props;
  console.log('EditPostForm: categories:', categories)
  //const { handleSubmit } = this.props;
  return (
      <div className='container'>
      <h1> Edit a topic </h1>

    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Author</label>
        <div>
          <Field name="author" component="input" type="text" placeholder="Author"/>
        </div>
      </div>
      <div className='form-group'>
        <label>Title</label>
        <div>
          <Field name="title" component="input" type="text" placeholder="Title" />
        </div>
      </div>
      <div>
        <label>Body</label>
        <div>
          <Field name="body" component="textarea" />
        </div>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field name="category" component="select">
            <option value="">Select a category...</option>
            {categories.length && categories.map(categoryOption =>
              <option value={categoryOption} key={categoryOption}>
                {categoryOption}
              </option>
            )}
          </Field>
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Post
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
    </div>
  );}
};
// Decorate the form component

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EditPostForm = reduxForm({
  form: 'submitEditPost' // a unique identifier for this form
})(EditPostForm)

function mapStateToProps(state,ownprops){
    //const postid = ownprops.match.params.postid;

    console.log('EditPostForm====>state',state)
    //console.log('PostDetail=====>ownprops',ownprops)
    //console.log('=====>state.posts.currentPost',state.posts.currentPost)
    //console.log('=====>state.posts.comments',state.posts.comments)
    return {
        //postid: postid,
        initialValues:state.posts.currentPost,
        categories:state.categories

    }
}
function mapDispatchToProps (dispatch) {
  return {
    load: values => dispatch(loadFormData(values))
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
