import React from 'react';
import { Button } from 'react-bootstrap';

export type CommentEntity = {
  author: string;
  parent: number;
  content: string;
  date: string;
  id: number;
  avatar: string;
};

export type Props = {
  comment: CommentEntity;
  comments: CommentEntity[];
};

export default function Comment({ comment, comments }: Props) {
  const { id, author, content, date, avatar } = comment;
  const commentDate = new Date(date);

  return (
    <div className="comment" id={`comment-${id}`}>
      <div className="avatar">
        <img
          src={avatar}
          width={100}
          height={100}
          loading="lazy"
          className="avatar avatar-100 photo avatar img-fluid rounded-circle"
          alt={`The avatar of ${author}`}
        />
      </div>
      <div className="comment-body">
        <div className="comment-meta">
          <div>
            {author}

            <Button
              href="#reply"
              variant="outline-dark"
              size="sm"
              className="float-end"
            >
              Reply
            </Button>
          </div>

          <div className="comment-meta-date">
            <a href={`#comment-${id}`}>{`${commentDate
              .toISOString()
              .slice(0, 10)} at ${(0 + commentDate.getHours().toString()).slice(
              -2
            )}:${(0 + commentDate.getMinutes().toString()).slice(-2)}`}</a>
          </div>
        </div>
        <div className="comment-content">{content}</div>
        <div className="children">
          {comments
            .filter((currentComment) => currentComment.parent === id)
            .map((currentComment) => (
              <Comment
                key={currentComment.id}
                comment={currentComment}
                comments={comments}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
