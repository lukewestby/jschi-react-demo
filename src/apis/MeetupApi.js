import request from './request';

const BASE_URL = 'http://localhost:8090';
const EVENT_COMMENTS_URL = `${BASE_URL}/event_comments`;
const EVENT_COMMENT_URL = `${BASE_URL}/event_comment`;
const EVENT_ID = 224092498;

export async function getComments() {

 const data = await request({
   url: EVENT_COMMENTS_URL,
   query: { event_id: EVENT_ID, fields: 'member_photo,like_count' }
 });

 return data.results;
}

export async function createComment({ comment }) {

  const data = await request({
    url: EVENT_COMMENT_URL,
    query: { fields: 'member_photo,like_count' },
    data: { comment, event_id: EVENT_ID },
    method: 'POST'
  });

  return data;
}
