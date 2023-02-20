import React, { useContext } from 'react'
import { TranslatorContext } from '../contexts/TranslatorContext';
import { useTranslate } from '../hooks/useTranslate';


const ExperienceItem = (experience: WorkExperience) => {
  const { language } = useContext(TranslatorContext);
  const translate = useTranslate();

  const getExperiencePeriod = () => {
    const [start, end] = experience.period;

    if (!start) return translate('currently');

    const lang = language === 'en' ? 'en-US' : 'pt-BR';

    const formattedStart = start.toLocaleDateString(lang, { month: 'long', year: 'numeric' });
    const formattedEnd = end?.toLocaleDateString(lang, { month: 'long', year: 'numeric' });

    return `${formattedStart} - ${formattedEnd || translate('currently')}`;
  }

  return (
    <div className="flex flex-col w-full gap-2 p-5">
      <div className="flex flex-row items-end gap-4">
        <h2 className='text-2xl font-bold leading-none'>{experience.company}</h2>
        <p className='text-sm leading-tight'>
          {getExperiencePeriod()}
        </p>
      </div>
      <h4 className='text-sm'>{translate(experience.place as any)}</h4>
      <h4 className='text-lg'>{translate(experience.position as any)} - {translate(experience.level as any)}</h4>
      
      <p className='text-xs text-slate-400 pt-2'>{translate('description')}:</p>
      <p className='text-sm'>{translate(experience.description as any)}</p>

      <p className='text-xs text-slate-400 pt-2'>{translate('tasks')}:</p>
      <ul className='text-sm list-disc pl-10'>
        {experience.tasks.map(task => (
          <li key={task}>{translate(task as any)}</li>
        ))}
      </ul>

      <p className='text-xs text-slate-400 pt-2'>{translate('usedTechs')}:</p>
      <span className='text-sm'>
        {experience.usedTechnologies.join(' - ')}
      </span>
    </div>
  )
}

export default ExperienceItem