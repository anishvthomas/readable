import React ,{ Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { loadFormData } from '../actions'
import { connect } from 'react-redux'


class EditPostForm extends Component
{
    componentDidMount=()=> {
            this.props.load()

    }
render()
{  const { error, handleSubmit, pristine, reset, submitting, categories } = this.props;
  return (
      <div className='container app'>
      <h1> Edit a topic </h1>

    <form className="form-horizontal" onSubmit={handleSubmit}>
        <table>
        <tr>
            <td>
                <label>Author</label>
            </td>
            <td>
                <Field name="author" component="input" type="text" placeholder="Author"/>
            </td>
        </tr>
        <tr>
            <td>
                <label>Title</label>
            </td>
            <td>
                <Field name="title" component="input" type="text" placeholder="Title" />
            </td>
        </tr>
        <tr>
            <td>
                <label>Body</label>
            </td>
            <td>
                <Field name="body" component="textarea" />
            </td>
        </tr>
        <tr>
            <td>
                <label>Category</label>
            </td>
            <td>
              <Field name="category" component="select">
                <option value="">Select a category...</option>
                {this.props.categ.categories.length && this.props.categ.categories.map(categoryOption =>
                  <option value={categoryOption.name} key={categoryOption.name}>
                    {categoryOption.name}
                  </option>
                )}
              </Field>
             </td>
        </tr>
        <tr>
            <td>
            <button type="submit" disabled={pristine || submitting}>
              Post
            </button>
            </td>
            <td>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Undo Changes
            </button>
            </td>


        </tr>
        </table>
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
    return {
        initialValues:state.posts.currentPost,
        categ:state.categories
    }
}
function mapDispatchToProps (dispatch) {
  return {
    load: values => dispatch(loadFormData(values))
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm)
