import React, { Component } from 'react';

import CommentBox from './CommentBox';
import Comment from './Comment';

import styles from '../styles/CommentsList.css';

export default class CommentsList extends Component {

  repliesForComment(commentId) {
    return this.props.comments
      .filter((comment) => comment.in_reply_to === commentId);
  }

  renderComments() {
    return this.props.comments
      .filter((comment) => !comment.in_reply_to)
      .sort((a, b) => b.time - a.time)
      .map((comment) => {
        return (
          <Comment key={comment.event_comment_id}
                   comment={comment}
                   replies={this.repliesForComment(comment.event_comment_id)}>
          </Comment>
        );
      });
  }

  renderCommentsContainer() {
    if(!this.props.comments.length) return;
    return (
      <div className={styles.commentsContainer}>
        {this.renderComments()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <CommentBox onSubmit={this.props.onCommentSubmit}
                    onChange={this.props.onCommentChange}
                    textContent={this.props.commentText}
                    message={this.props.message}>
        </CommentBox>
        {this.renderCommentsContainer()}
      </div>
    );
  }
}
