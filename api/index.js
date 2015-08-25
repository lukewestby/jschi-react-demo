import { Server } from 'hapi';
import superagent from 'superagent';
import { API_KEY } from './config';

const server = new Server();

server.connection({
  port: '8090',
  host: 'localhost',
  routes: { cors: true }
});

const MEETUP_BASE = 'https://api.meetup.com/2';
const EVENT_COMMENTS_URL = `${MEETUP_BASE}/event_comments`;
const EVENT_COMMENT_URL = `${MEETUP_BASE}/event_comment`;
const MEMBER_URL = `${MEETUP_BASE}/member`;

server.route({
  method: 'GET',
  path: '/event_comments',
  handler(request, reply) {
    superagent
      .get(EVENT_COMMENTS_URL)
      .query({
        ...request.query,
        key: API_KEY,
        signed: true
      })
      .end((error, response) => {
        if(error) reply(error);
        else if(!response.ok) reply(Error(response.text));
        else reply(response.body);
      });
  }
});

server.route({
  method: 'POST',
  path: '/event_comment',
  handler(request, reply) {
    superagent
      .post(EVENT_COMMENT_URL)
      .type('form')
      .send({
        ...request.payload,
        key: API_KEY
      })
      .query(request.query)
      .end((error, response) => {
        if(error) reply(error);
        else if(!response.ok) reply(Error(response.text));
        else reply(response.body);
      });
  }
});

server.route({
  method: 'DELETE',
  path: '/event_comment/{comment_id}',
  handler(request, reply) {
    superagent
      .del(`${EVENT_COMMENT_URL}/${request.params.comment_id}`)
      .type('form')
      .query({
        key: API_KEY
      })
      .end((error, response) => {
        console.log(response);
        if(error) reply(error);
        else if(!response.ok) reply(Error(response.text));
        else reply(response.body);
      });
  }
});

server.start(() => {
  console.log('api running at localhost:8090');
});
