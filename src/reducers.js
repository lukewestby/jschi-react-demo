import { combineReducers } from 'redux';
import {
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  CREATE_COMMENT_START,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  UPDATE_COMMENT_TEXT,
  CLEAR_COMMENT_TEXT
} from './actions';

function comments(state = [], action) {
  switch(action.type) {

  case LOAD_COMMENTS_SUCCESS:
    return action.comments;

  case CREATE_COMMENT_SUCCESS:
    return state.concat(action.comment);

  default:
    return state;
  }
}

function loading(state = false, action) {
  switch(action.type) {

  case CREATE_COMMENT_START:
  case LOAD_COMMENTS_START:
    return true;

  default:
    return false;
  }
}

function errorMessage(state = null, action) {
  switch(action.type) {

  case CREATE_COMMENT_FAILURE:
    return 'Could not create your comment';

  case LOAD_COMMENTS_FAILURE:
    return 'Could not load comments';

  case CREATE_COMMENT_SUCCESS:
  case LOAD_COMMENTS_SUCCESS:
    return null;

  default:
    return state;
  }
}

function commentText(state = '', action) {
  switch(action.type) {

  case UPDATE_COMMENT_TEXT:
    return action.commentText;

  case CLEAR_COMMENT_TEXT:
    return '';

  default:
    return state;
  }
}

export default combineReducers({
  comments,
  errorMessage,
  loading,
  commentText
});
