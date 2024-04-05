import React from 'react';
import Comment, { CommentEntity } from '@/components/comment/comment/Comment';

export type Props = {
  comments: CommentEntity[];
  allow: boolean;
  hidden?: boolean;
};

export default function CommentsThread(props: Props) {
  const { comments } = props;

  let title = `Be the first to comment`;
  if (comments.length) {
    title = `${comments.length} Comments`;
  }

  return (
    <div id="comments" className="comments-area mb-5">
      <h4 className="comments-title mb-4">{title}</h4>
      <div className="comment-list shadow-sm">
        {comments
          .filter((comment) => !comment.parent)
          .map((comment: CommentEntity) => (
            <Comment key={comment.id} comment={comment} comments={comments} />
          ))}
      </div>
    </div>
  );
}
