import Image from 'next/image';
import React from 'react';

export type Props = {
  photo: string;
  feedback: string;
  author: string;
};

export default function Testimonial(props: Props) {
  const { photo, feedback, author } = props;

  return (
    <div className="d-flex flex-column align-items-center flex-md-row">
      <div>
        <Image
          src={photo}
          width={175}
          height={175}
          loading="lazy"
          className="rounded-circle"
          alt={author}
        />
      </div>
      <div className="ms-3">
        <p>{feedback}</p>
        <small className="font-italic">– {author}</small>
      </div>
    </div>
  );
}
