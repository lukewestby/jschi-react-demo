import EventEmitter from 'events';
import { List } from 'immutable';
import { dispatcher } from '../dispatcher';
import { LOAD_COMMENTS_COMPLETED_ACTION, LOAD_COMMENTS_FAILED_ACTION } from '../constants';
import assign from 'object-assign';

const eventEmitter = new EventEmitter();
const commentsStore = Object.create(eventEmitter);

let comments = List();
let errorMessage = null;

assign(commentsStore, {

  getComments() {
    return comments;
  },

  getErrorMessage() {
    return errorMessage;
  }
});

dispatcher.register((action) => {

  switch(action.type) {

  case LOAD_COMMENTS_COMPLETED_ACTION:
    comments = List(action.payload);
    commentsStore.emit('change');
    break;

  case LOAD_COMMENTS_FAILED_ACTION:
    errorMessage = action.payload;
    commentsStore.emit('change');
    break;

  }
});
