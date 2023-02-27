import React from 'react'
import {Icon} from '@iconify/react';

import Status from './Status';
import { useTranslate } from '../hooks/useTranslate';

type Props = Project;

const ProjectCard = (props: Props) => {
  const translate = useTranslate();

  return (
    <div className="w-full px-7 py-3 border rounded-xl">
      <div className="flex flex-row items-center gap-3">
        <p className="text-lg font-bold flex-1">{props.name}</p>
        
        <a href={props.link} className="hover:scale-110 text-xs flex flex-row gap-1 border hover:text-slate-800 hover:bg-slate-200 text-slate-200 rounded-full items-center px-2 py-1 transition-all" target="_blank">
          {translate('visit')}
          <Icon icon="mdi:github" width={24} height={24}/>
        </a>
        
        <Status state={props.status} />
      </div>


      <div>
        <p className='text-xs text-slate-400 pt-2'>{translate('techs')}:</p>
        <p className="text-sm">{props.usedTechnologies.join(" • ")}</p>
      </div>

      <div>
        <p className='text-xs text-slate-400 pt-2'>{translate('description')}:</p>
        <p className="text-sm">{translate(props.description as any)}</p>
      </div>
    </div>
  )
}

export default ProjectCard