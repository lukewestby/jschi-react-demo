import 'whatwg-fetch';

const MEETUP_API_BASE = 'https://api.meetup.com';
const EVENT_ID = 1234566;

export async function getComments() {
  const url = `${MEETUP_API_BASE}/event_comments?event_id=${EVENT_ID}`;
  const fetchResponse = await fetch(url);
  const apiResponse = await fetchResponse.json();
  return apiResponse.results;
}

export function getUserImageSource(userId) {
  return `https://cdn.meetup.com/user/image/small/${userId}`;
}

export function getUserProfileLink(userId) {
  return `https://meetup.com/user/${userId}`;
}
