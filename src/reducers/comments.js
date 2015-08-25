import {
  LOAD_COMMENTS_SUCCESS,
  CREATE_COMMENT_SUCCESS
} from '../constants';

export default function comments(state = [], action) {
  switch(action.type) {

  case LOAD_COMMENTS_SUCCESS:
    return action.comments;

  case CREATE_COMMENT_SUCCESS:
    return state.concat(action.comment);

  default:
    return state;
  }
}
