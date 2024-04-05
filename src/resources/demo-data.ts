export const latestArticles = [
  {
    headline: 'How to structure your site for success',
    path: '/blog/some-slug-1',
    date: 'July 27, 2021',
    author: 'Sashe Vuchkov',
    category: 'Tips & Tricks',
    excerpt:
      'Success is never guaranteed, but structure your site this way and you have better odds.',
    image: {
      src: '/images/fab-lentz-mRMQwK513hY-unsplash-up.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },

  {
    headline: 'Two magic words that make dev and business miracles happen',
    path: '/blog/some-slug-2',
    date: 'June 21, 2021',
    author: 'Sashe Vuchkov',
    category: 'Thoughts',
    excerpt:
      'They bring on the table huge benefits that outweigh by a wide margin the cons of losing some control over the codebase.',
    image: {
      src: '/images/magic-unsplash.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },
  {
    headline:
      'Why most of the successful tech companies are “doomed” to follow multicultural policies?',
    path: '/blog/some-slug-3',
    date: 'May 21, 2021',
    author: 'Sashe Vuchkov',
    category: 'Thoughts',
    excerpt:
      'Everybody deserves equal opportunity and chance to prove themselves in a competitive environment',
    image: {
      src: '/images/nathan-dumlao-pMW4jzELQCw-unsplash-diversity.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },
  {
    headline: 'A not so fair industry norm',
    path: '/blog/some-slug-4',
    date: 'April 21, 2021',
    author: 'Sashe Vuchkov',
    category: 'Thoughts',
    excerpt: 'Why the code authors get worse deals than the book authors?',
    image: {
      src: '/images/yasin-yusuf-fMh-VTuMHQs-unsplash-norms-resized.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },
  {
    headline: '5 best-guarded secrets for a profitable website',
    path: '/blog/some-slug-5',
    date: 'March 21, 2021',
    author: 'Sashe Vuchkov',
    category: 'Tips & Tricks',
    excerpt:
      'Pretty design and lots of cool features - those things are a must, but there are some additional details that will make your site more profitable',
    image: {
      src: '/images/alex-young-OxJxV4qakx0-unsplash-best-guarded.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },
  {
    headline: 'How to structure your site for success',
    path: '/blog/some-slug-6',
    date: 'February 21, 2021',
    author: 'Sashe Vuchkov',
    category: 'Tips & Tricks',
    excerpt:
      'Success is never guaranteed, but structure your site this way and you have better odds.',
    image: {
      src: '/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg',
      height: 200,
      width: 300,
      load: 'lazy',
    },
  },
];

export const featuredArticles = latestArticles.slice(0, 2);
export const popularArticles = [latestArticles[4]];
export const latestArticlesContacts = latestArticles.slice(0, 4);

export const projects = [
  {
    id: 1,
    name: 'BuhalBu.com',
    slug: '/projects/buhalbu',
    image: '/images/project-buhalbu-unbranded.png',
  },
  {
    id: 2,
    name: 'Job Market Analytic',
    slug: '/projects/buhalbu',
    image: '/images/project-job-market-analytics-unbranded.png',
  },
  {
    id: 3,
    name: 'BFavourite.com',
    slug: '/projects/buhalbu',
    image: '/images/project-bfavourite-refactoring-unbranded.png',
  },
  {
    id: 4,
    name: 'Custom Social Network',
    slug: '/projects/buhalbu',
    image: '/images/project-bfavourite-recreated-unbranded.png',
  },
  {
    id: 5,
    name: 'Sgotvenoe.com',
    slug: '/projects/buhalbu',
    image: '/images/project-sgotvenoe-com-unbranded.png',
  },
  {
    id: 6,
    name: 'Personal Website',
    slug: '/projects/buhalbu',
    image: '/images/project-sashevuchkov-unbranded.png',
  },
];

export const feedback = [
  {
    text: `I love your work, because everything you do is perfectly aligned with the needs of my business. And that's a rare thing...`,
    author: 'Dara Brown , Founder at Fusion Dot',
    photo: '/images/test-1.jpg',
  },
  {
    text: 'I love your blog and have shared it with all of my friends and colleagues. There’s valuable insight in every single article.',
    author: 'Erin Shields , Founder at Spark',
    photo: '/images/test-2.jpg',
  },
];

export const tags = [
  { name: 'Next Js', href: '#' },
  { name: 'TypeScript', href: '#' },
  { name: 'CSS3', href: '#' },
  { name: 'JavaScript', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Site Speed', href: '#' },
  { name: 'SEO Enhancements', href: '#' },
  { name: 'JavaScript', href: '#' },
  { name: 'Domains', href: '#' },
  { name: 'Serverless', href: '#' },
  { name: 'Tips & Tricks', href: '#' },
  { name: 'Use Cases', href: '#' },
  { name: 'Popular', href: '#' },
  { name: 'Featured', href: '#' },
];

export const comments = [
  {
    id: 1,
    parent: 0,
    content: "Hello, it's cool and cooler it gets",
    author: 'Sonya',
    date: 'May 21, 2021 04:01',
    avatar: '/images/test-1.jpg',
  },
  {
    id: 2,
    parent: 0,
    content: "What a sad commentary on our nation's attention span",
    author: 'Johny',
    date: 'May 21, 2021 22:30',
    avatar: '/images/test-2.jpg',
  },
  {
    id: 1,
    parent: 2,
    content: 'You are so right!',
    author: 'Sonya',
    date: 'May 22, 2021 04:01',
    avatar: '/images/test-1.jpg',
  },
];
