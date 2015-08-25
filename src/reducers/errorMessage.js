import {
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE
} from '../constants';

export default function errorMessage(state = null, action) {
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
