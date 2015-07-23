import EventEmitter from 'events';
import { List } from 'immutable';
import { dispatcher } from '../dispatcher';


class CommentsStore extends EventEmitter {

  comments = List();


}
