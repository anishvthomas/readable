import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './NewPostForm.css'
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label htmlFor={label} className="col-sm-2">{label}</label>
    <div className='col-sm-8 inputGroup'>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
const required = value => value ? undefined : 'Required'

const NewPostForm = props => {
const { error, handleSubmit, pristine, reset, submitting } = props;
  //const { handleSubmit } = this.props;
  return (
      <div className='container app'>
      <h1> Post a topic </h1>
    <form className="form-horizontal" onSubmit={handleSubmit}>
    <Field name="author" type="text" component={renderField} label="Author" validate= {required}/>
    <Field name="title" type="text" component={renderField} label="Title" validate= {required}/>
    <Field name="body" type="textarea" component={renderField} label="Body" validate= {required}/>
    {/*<Field name="category" type="text" component={renderField} label="Category"/>*/}
    <div className='form-group'>
      <label htmlFor="category" className="col-sm-2">Category</label>
      <div className='col-sm-8 inputGroup'>
    <Field name="category" component="select">
      <option value="">Select a category...</option>
      {props.categorylist.categories.length && props.categorylist.categories.map(categoryOption =>
        <option value={categoryOption.name} key={categoryOption.name}>
          {categoryOption.name}
        </option>
      )}
    </Field>
    </div>
  </div>
    {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>Post</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>

         </div>
    </form>
    </div>
  );
};
// Decorate the form component

export default reduxForm({
  form: 'submitNewPost' // a unique name for this form
})(NewPostForm);
