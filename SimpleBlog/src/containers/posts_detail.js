import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class PostDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onClickDelete() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button onClick={this.onClickDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);