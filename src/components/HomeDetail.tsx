import { Icon } from '@iconify/react';
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  details: string[];
  icon: string;
  link: string;
  linkText: string;
}

const HomeDetail = ({details, link, linkText, title, icon}: Props) => {
  return (
    <div className="flex flex-col justify-center text-white border-b pb-3">
      <p className="text-sm tracking-wide text-slate-300">{title}</p>

      <div className="flex md:flex-row items-center gap-4 flex-col">
        <Icon icon={icon} className="text-8xl m-6" />

        <ul className='list-disc pl-5'>
          {details.map(item => (
            <li key={item}>
              <p className="text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link to={link} className="text-lg underline">{linkText}</Link>
    </div>
  )
}

export default HomeDetail