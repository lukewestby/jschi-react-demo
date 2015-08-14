import moment from 'moment';
import React, { Component } from 'react';
import StyleSheet from 'stilr';

import CommentsList from './CommentsList';

const styles = StyleSheet.create({
  detailsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: '16px',
    ':last-child': {
      paddingBottom: '0px'
    }
  },
  mainContainer: {
    marginBottom: '32px',
    ':last-child': {
      marginBottom: '0'
    }
  },
  repliesContainer: {
    padding: '16px',
    backgroundColor: '#f7f7f7'
  },
  image: {
    width: '100px',
  },
  info: {
    paddingLeft: '16px'
  },
  content: {
    margin: 0,
    lineHeight: 1.4
  },
  metaData: {
    margin: 0,
    color: '#acacac'
  },
  name: {
    margin: 0,
    marginBottom: '12px',
    fontSize: '1.2em',
    lineHeight: '1'
  }
});

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
            <p className={styles.content}>
              {this.props.comment.comment}
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
