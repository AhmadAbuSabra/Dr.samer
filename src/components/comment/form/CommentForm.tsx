import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function CommentForm() {
  return (
    <div id="respond" className="comment-respond">
      <h5 id="reply-title" className="comment-reply-title">
        Leave a reply{' '}
      </h5>

      <Form method="POST" className="row">
        <Form.Group className="comment-notes col-12 mb-3">
          Your email address will not be published.*
        </Form.Group>
        <Form.Group className="col-12">
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Comment"
            name="content"
            className="mb-3"
          />
        </Form.Group>
        <Form.Group className="col-md-4 mb-3">
          <Form.Control type="text" placeholder="Name" name="author_name" />
        </Form.Group>
        <Form.Group className="col-md-4 mb-3">
          <Form.Control type="email" placeholder="Email" name="author_email" />
        </Form.Group>
        <Form.Group className="col-md-4 mb-3">
          <Form.Control type="url" placeholder="Website" name="author_url" />
        </Form.Group>
        <div className="form-submit col-12">
          <Button
            className="text-white text-uppercase"
            type="submit"
            name="submit"
            id="submit"
          >
            Post Comment
          </Button>
        </div>
      </Form>
    </div>
  );
}
