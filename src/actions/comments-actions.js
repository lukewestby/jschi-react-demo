import { LOAD_COMMENTS_FAILED_ACTION, LOAD_COMMENTS_COMPLETED_ACTION } from '../constants';
import { dispatcher } from '../dispatcher';
import * as commentsApi from '../apis/comments-api';

function loadCommentsCompleted(comments) {
  return {
    type: LOAD_COMMENTS_COMPLETED_ACTION,
    payload: comments
  };
}

function loadCommentsFailed(error) {
  return {
    type: LOAD_COMMENTS_FAILED_ACTION,
    payload: error.message || "Could not load comments at this time"
  };
}

export function loadComments() {
  commentsApi
    .getComments()
    .then((comments) => {
      dispatcher.dispatch(loadCommentsCompleted(comments))
    })
    .catch((error) => {
      dispatcher.dispatch(loadCommentsFailed(error));
    });
}
