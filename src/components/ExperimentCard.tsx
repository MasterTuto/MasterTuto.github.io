import React from 'react'
import Chip from './Chip';
import StarLevel from './StarLevel';

type Props = Experiment;

const ExperimentCard = ({
  description,
  interestingLevel,
  link,
  name,
  tag
}: Props) => {

  

  return (
    <a href={link} target='_blank' className='relative flex flex-col h-44 cursor-pointer hover:shadow-slate-100 hover:drop-shadow-xl hover:-translate-x-1 hover:-translate-y-1 transition'>
      <div className='flex-1 flex rounded-tl-xl rounded-tr-xl border items-end justify-end px-1 bg-slate-900'>
        <h1 className='text-2xl text-right'>{name}</h1>
      </div>
      <div className='bg-slate-100 rounded-bl-xl rounded-br-xl text-slate-900 p-1 pb-2'>
        <p className='text-sm'>{description}</p>
      </div>

      <Chip text={tag} className="absolute top-2 left-2" size="xs" />

      <StarLevel level={interestingLevel} className="absolute top-2 right-2" />
    </a>
  )
}

export default ExperimentCard