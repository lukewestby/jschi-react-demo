import {
  UPDATE_COMMENT_TEXT,
  CLEAR_COMMENT_TEXT
} from '../constants';

export function updateCommentText(commentText) {
  return { type: UPDATE_COMMENT_TEXT, commentText };
}

export function clearCommentText() {
  return { type: CLEAR_COMMENT_TEXT };
}
