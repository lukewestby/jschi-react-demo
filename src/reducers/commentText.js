import {
  UPDATE_COMMENT_TEXT,
  CLEAR_COMMENT_TEXT
} from '../constants';

export default function commentText(state = '', action) {
  switch(action.type) {

  case UPDATE_COMMENT_TEXT:
    return action.commentText;

  case CLEAR_COMMENT_TEXT:
    return '';

  default:
    return state;
  }
}
