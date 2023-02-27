import { Icon } from '@iconify/react';
import React from 'react'
import profilePicture from '../assets/picture.png';
import { socials } from '../data/social';
import { useTranslate } from '../hooks/useTranslate';

const AboutMe = () => {
  const translate = useTranslate();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="rounded-full w-48 h-48 overflow-hidden">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="scale-125 translate-x-5 translate-y-5 object-cover rounded-full"
        />
      </div>

      <h1 className="text-3xl font-bold mt-4 text-center">Breno Carvalho da Silva</h1>
      <h2 className="text-xl font-medium mt-2">{translate('software_engineer')}</h2>

      <div className="flex flex-row mt-4 gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={social.icon} className="text-3xl hover:text-green-400" />
          </a>
        ))}
      </div>

      <section className="flex flex-col text-sm mt-4 text-center gap-3 items-center">
        <p>{translate('about_me_paragraph_1')}</p>
        <p>{translate('about_me_paragraph_2')}</p>
        <p>{translate('about_me_paragraph_3')}</p>
        <p>{translate('about_me_paragraph_4')}</p>
      </section>
    </div>
  )
}

export default AboutMe