import React, { Component } from 'react';
import { createPost } from '../actions';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class PostsNew extends Component {
  render() {
  	const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
      	<h3>Create a New Post</h3>
      	<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
      		<label htmlFor="">Title</label>
      		<input type="text" className="form-control" {...title} />
      		<div className="text-help">
      			{ title.touched ? title.error : '' }
      		</div>
      	</div>
      	<div className="form-group">
      		<label htmlFor="">Categories</label>
      		<input type="text" className="form-control" {...categories} />
      	</div>
      	<div className="form-group">
      		<label htmlFor="">Title</label>
      		<textarea name="" id="" cols="30" rows="10" className="form-control" {...content} />
      	</div>
      	<button type="submit" className="btn btn-success">Save</button>
      	<Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a username';
	}

	return errors;
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);
