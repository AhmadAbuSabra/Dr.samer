import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AsideTitle from '@/components/section/sidebar/AsideTitle';

export type Post = {
  headline: string;
  path: string;
  excerpt?: string;
  image: {
    src: string;
  };
};

export type Props = {
  title: string;
  className?: string;
  posts: Post[];
};

export default function PostsListWidget({ title, posts, className }: Props) {
  return (
    <aside className={className}>
      <AsideTitle>{title}</AsideTitle>
      <ul className="post-list">
        {posts &&
          posts.map((post) => (
            <li key={post.path}>
              {post.image && (
                <Link href={post.path}>
                  <a href={post.path} className="me-2">
                    <Image
                      width={80}
                      height={50}
                      src={post.image.src}
                      className="rounded"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </Link>
              )}
              <div className="w-75">
                <Link href={post.path ?? '#'} passHref>
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <a
                    href={post.path}
                    dangerouslySetInnerHTML={{ __html: post.headline || '' }}
                  />
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
}
