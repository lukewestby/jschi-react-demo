import '../setup';
import test from 'tape';
import React from 'react/addons';

import Comment from '../../src/components/Comment';

const {
  renderIntoDocument,
  findAllInRenderedTree,
  isCompositeComponentWithType
} = React.addons.TestUtils;

function createCommentProp(replies = true) {

  const now = new Date();
  const oneMinuteAgo = now.setMinutes(now.getMinutes() - 1);

  const comment = {
    event_comment_id: Math.round(Math.random() * 1000),
    time: oneMinuteAgo.valueOf(),
    like_count: 20,
    member_photo: {
      photo_link: 'http://placekitten.com/100/200'
    },
    member_name: 'Test User',
    comment: 'Test text http://hyperlink.com'
  };

  if(replies) comment.replies = [createCommentProp(false)];

  return comment;
}

function createComment() {
  return renderIntoDocument(<Comment comment={createCommentProp()} />);
}

test('getTimeAgo()', (t) => {
  t.plan(1);
  const comment = createComment();

  t.equal(
    'a minute ago',
    comment.getTimeAgo(),
    'The timeAgo value should be equal to "a minute ago" per moment.js functionality'
  );
});

test('getLikesText()', (t) => {

  t.plan(1);

  const comment = createComment();

  t.equal(
    '20 likes',
    comment.getLikesText(),
    'The likes text should be the number of likes followed by the word "likes"'
  );
});

test('parseCommentLinks()', (t) => {
  t.plan(1);
  const comment = createComment();
  t.equal(
    'Test text <a href="http://hyperlink.com" target="_blank">http://hyperlink.com</a>',
    comment.getParsedComment(),
    'The parsed comment text should have all hyperlinks replaced with anchor tags'
  );
});

test('renderReplies()', (t) => {
  t.plan(1);
  const comment = createComment();

  const replies = findAllInRenderedTree(comment, (component) => {
    return isCompositeComponentWithType(component, Comment);
  });

  t.equal(
    1,
    replies.length,
    'There should be one nested Comment instance per reply in the comment prop'
  );
});
