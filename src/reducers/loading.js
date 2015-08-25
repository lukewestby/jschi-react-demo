import {
  LOAD_COMMENTS_START,
  CREATE_COMMENT_START
} from '../constants';

export default function loading(state = false, action) {
  switch(action.type) {

  case CREATE_COMMENT_START:
  case LOAD_COMMENTS_START:
    return true;

  default:
    return false;
  }
}
