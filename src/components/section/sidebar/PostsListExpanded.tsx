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

export default function PostsListExpanded({ title, posts, className }: Props) {
  return (
    <aside className={className}>
      <AsideTitle>{title}</AsideTitle>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.path} className="mt-3 bg-white shadow-sm">
              {post.image && (
                <Link href={post.path}>
                  <a href={post.path}>
                    <Image
                      width={350}
                      height={180}
                      src={post.image.src}
                      className="rounded"
                      alt=""
                      loading="lazy"
                      layout="responsive"
                      objectFit="cover"
                    />
                  </a>
                </Link>
              )}
              <div className="mt-2 px-3 pb-2">
                <Link href={post.path ?? '#'} passHref>
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <a
                    href={post.path}
                    className="h5"
                    dangerouslySetInnerHTML={{ __html: post.headline || '' }}
                  />
                </Link>
                <p className="my-2">{post.excerpt}</p>
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
}
