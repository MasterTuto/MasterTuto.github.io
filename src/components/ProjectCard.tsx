import React from 'react'
import {Icon} from '@iconify/react';

import colors from 'tailwindcss/colors';
import Status from './Status';
import { useTranslate } from '../hooks/useTranslate';

type Props = Project;

const ProjectCard = (props: Props) => {
  const translate = useTranslate();

  return (
    <div className="w-full px-7 py-3 border rounded-xl">
      <div className="flex flex-row items-center gap-3">
        <p className="text-lg font-bold">{props.name}</p>
        
        <a href={props.link} className="hover:scale-150 transition-all" target="_blank">
          <Icon icon="mdi:github" color={colors.slate[200]} width={24} height={24}/>
        </a>
        
        <Status state={props.status} />
      </div>


      <div>
        <p className='text-xs text-slate-400 pt-2'>{translate('techs')}:</p>
        <p className="text-sm">{props.usedTechnologies.join(" • ")}</p>
      </div>

      <div>
        <p className='text-xs text-slate-400 pt-2'>{translate('description')}:</p>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard