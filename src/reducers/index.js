import { combineReducers } from 'redux';

import comments from './comments';
import commentText from './commentText';
import errorMessage from './errorMessage';
import loading from './loading';

export default combineReducers({
  comments,
  commentText,
  errorMessage,
  loading
});
