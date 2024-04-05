import React from 'react';
import { ListGroup } from 'react-bootstrap';
import NextLink from 'next/link';
import Ad from '@/components/section/blurps/Ad';

export type Link = {
  id: number;
  headline: string;
  desc: string;
  href: string;
};

export type SupportData = {
  headline: string;
  desc: string;
  links: Link[];
};

export default function Support() {
  const links: Link[] = [
    {
      id: 1,
      headline: 'قم بمشاهدة فيديوهاتي',
      desc: 'تحتوي الفيديوهات على معلومات عن طبية و علمية ',
      href: '/projects',
    },
    {
      id: 2,
      headline: ' اقرأ عن حالات الألم التي يعالجها الدكتور ',
      desc: 'يعالج الدكتور سامر عبد العزيز حالات الألم المزمن وآلام العمود الفقري، والتي تشمل',
      href: '/CasesPage',
    },
    {
      id: 3,
      headline: 'إقرأ بعض مقالاتي',
      desc: 'قمت بكتابة مواضيع و نصائح طبية',
      href: '/blog',
    },
    {
      id: 4,
      headline: ' اقرأ عن الدكتور سامر عبدالعزيز ',
      desc: "",
      href: '/about',
    },
  ];

  const data: SupportData = {
    headline: 'كيف يمكنني مساعدتك',
    desc: "الرجاء اختيار موضوع أدناه يتعلق باستفسارك. إذا لم تجد ما تحتاجه، املأ نموذج الاتصال ثم أرسله.",
    links,
  };

  const { headline, desc } = data;

  return (
    <>
      <div>
        <h2 className="h2">{headline}</h2>
        <p>{desc}</p>
        <ListGroup className="support">
          {links.map((link: Link) => (
            <NextLink key={link.id} href={link.href}>
              <ListGroup.Item className="d-flex justify-content-between align-items-center pointer">
                <div>
                  <h5 className="mb-1">{link.headline}</h5>
                  <p className="m-0">{link.desc}</p>
                </div>
                <span className="ms-2 ti-angle-right" />
              </ListGroup.Item>
            </NextLink>
          ))}
        </ListGroup>
      </div>
      <Ad />
    </>
  );
}
