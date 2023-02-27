import { Icon } from '@iconify/react'
import React from 'react'
import { SectionHeader } from '../components'
import { socials } from '../data/social'
import { useTranslate } from '../hooks/useTranslate'

type Props = {}

const Contact = (props: Props) => {
  const translate = useTranslate();

  return (
    <div className="flex flex-col items-center w-full">
      <SectionHeader
        title={translate('contact_title')}
        subtitle={translate('contact_subtitle')}
      />

      <div className="flex flex-col items-center gap-3 max-w-xs w-full">
        {socials.map((social, index) => (
          <a
            key={index}
            className="group flex p-2 flex-row items-center w-full bg-slate-700 transition hover:bg-slate-800 border rounded-xl"
            href={social.url}
            title={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={social.icon} className="text-3xl text-slate-400 group-hover:text-slate-100 transition" />
            <span className="flex-1 ml-2 text-slate-400 group-hover:text-slate-100  transition">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contact