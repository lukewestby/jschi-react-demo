import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../styles/App.css';
import { Header } from './Header';
import CommentsList from './CommentsList';
import {
  loadComments,
  updateCommentText,
  createComment
} from '../actions';

@connect((state) => state)
export default class App extends Component {

  componentWillMount() {
    this.props.dispatch(loadComments());
  }

  onCommentSubmit(text) {
    this.props.dispatch(createComment(text));
  }

  onCommentChange(commentText) {
    this.props.dispatch(updateCommentText(commentText));
  }

  getMessage() {
    if(this.props.loading) return 'Loading ...';
    if(this.props.errorMessage) return this.props.errorMessage;
  }

  render() {
    return (
      <div className={styles.appBase}>
        <Header />
        <div className={styles.container}>
          <CommentsList onCommentSubmit={(text) => this.onCommentSubmit(text)}
                        onCommentChange={(text) => this.onCommentChange(text)}
                        commentText={this.props.commentText}
                        comments={this.props.comments}
                        message={this.getMessage()}>
          </CommentsList>
        </div>
      </div>
    );
  }
}
