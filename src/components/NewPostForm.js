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

const NewPostForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  //const { handleSubmit } = this.props;
  return (
      <div className='container'>
      <h1> Post a topic </h1>
    <form className="form-horizontal" onSubmit={handleSubmit}>
    <Field name="author" type="text" component={renderField} label="Author" />
    <Field name="title" type="text" component={renderField} label="Title"/>
    <Field name="body" type="text" component={renderField} label="Body" />
    <Field name="category" type="text" component={renderField} label="Category"/>
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
