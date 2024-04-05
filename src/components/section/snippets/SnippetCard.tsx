import { Card } from 'react-bootstrap';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type Props = {
  image: {
    src: string;
    width: number;
    height: number;
    layout?: 'fixed' | 'intrinsic' | 'responsive';
    loading?: 'lazy';
  };
  headline: string;
  path: string;
  date: string;
  className?: string;
};

export default function SnippetCard({
  headline,
  path,
  date,
  image,
  className,
}: Props) {
  return (
    <Card className={`bg-transparent border-0 ${className || ''}`}>
      <Link href={path}>
        <a href={path}>
          <Image
            objectFit="cover"
            {...image}
            layout="responsive"
            className="card-img-top pointer"
          />
        </a>
      </Link>
      <Card.Body className="px-0">
        <Card.Title className="mb-1 h5">
          <Link href={path}>
            <a href={path}>{headline}</a>
          </Link>
        </Card.Title>
        <Card.Text>{date}</Card.Text>
      </Card.Body>
    </Card>
  );
}
