import React, { Component } from 'react';
import StyleSheet from 'stilr';
import hotReloadStyles from '../decorators/hotReloadStyles';
import { connect } from 'react-redux';

import { Header } from './Header';
import CommentsList from './CommentsList';

import {
  loadComments,
  updateCommentText,
  createComment
} from '../actions';

const styles = StyleSheet.create({
  base: {
    fontFamily: "Oxygen",
    fontWeight: "normal"
  },
  container: {
    maxWidth: "768px",
    margin: '0 auto',
    padding: "80px 20px 20px"
  }
});

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

  @hotReloadStyles
  render() {
    return (
      <div className={styles.base}>
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
