import {
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  UPDATE_COMMENT_TEXT,
  CLEAR_COMMENT_TEXT
} from '../constants';

import {
  createComment as apiCreateComment,
  getComments
} from '../apis/meetupApi';

export function updateCommentText(commentText) {
  return { type: UPDATE_COMMENT_TEXT, commentText };
}

export function clearCommentText() {
  return { type: CLEAR_COMMENT_TEXT };
}

export function loadCommentsStart() {
  return { type: LOAD_COMMENTS_START };
}

export function loadCommentsSuccess(comments) {
  return { type: LOAD_COMMENTS_SUCCESS, comments };
}

export function loadCommentsFailure(error) {
  return { type: LOAD_COMMENTS_FAILURE, error };
}

export function loadComments() {
  return async function (dispatch) {
    dispatch(loadCommentsStart());
    try {
      const comments = await getComments();
      dispatch(loadCommentsSuccess(comments));
    }
    catch(error) {
      dispatch(loadCommentsFailure(error));
    }
  }
}

export function createCommentStart() {
  return { type: CREATE_COMMENT_START };
}

export function createCommentFailure(error) {
  return { type: CREATE_COMMENT_FAILURE, error }
}

export function createCommentSuccess(comment) {
  return { type: CREATE_COMMENT_SUCCESS, comment };
}

export function createComment(commentText) {
  return async function (dispatch) {
    dispatch(createCommentStart());
    try {
      const newComment = await apiCreateComment({ comment: commentText });
      dispatch(createCommentSuccess(newComment));
      dispatch(clearCommentText());
    }
    catch(error) {
      dispatch(createCommentFailure(error));
    }
  }
}
