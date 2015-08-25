import moment from 'moment';
import React, { Component } from 'react';

import styles from '../styles/Comment.css';

export default class Comment extends Component {

  getTimeAgo() {
    return moment(this.props.comment.time).fromNow();
  }

  getLikesText() {
    return this.props.comment.like_count === 1
      ? '1 like'
      : `${this.props.comment.like_count} likes`;
  }

  renderRepliesContainer() {
    if(!this.props.replies || !this.props.replies.length) return;
    return (
      <div className={styles.repliesContainer}>
        {this.renderReplies()}
      </div>
    );
  }

  renderReplies() {
    return this.props.replies
      .sort((comment) => comment.time)
      .map((comment) => {
        return (
          <Comment key={comment.event_comment_id}
                   comment={comment}>
          </Comment>
        );
      });
  }

  parseCommentLinks(comment) {
    return comment.replace(/https?:\/\/[^\s]+/g, (match) => {
      return `<a href="${match}" target="_blank">${match}</a>`;
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.detailsContainer}>
          <img className={styles.image}
               src={this.props.comment.member_photo.photo_link} />
          <div className={styles.info}>
            <p className={styles.name}>
              {this.props.comment.member_name}
            </p>
            <p className={styles.content}
               dangerouslySetInnerHTML={{__html: this.parseCommentLinks(this.props.comment.comment)}}>
            </p>
            <p className={styles.metaData}>
              {this.getTimeAgo()} &middot; {this.getLikesText()}
            </p>
          </div>
        </div>
        {this.renderRepliesContainer()}
      </div>
    );
  }
}
