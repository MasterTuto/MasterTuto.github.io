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
    <a href={link} target='_blank' className='flex flex-col md:h-44 h-56 cursor-pointer hover:shadow-slate-100 hover:drop-shadow-xl hover:-translate-x-1 hover:-translate-y-1 transition'>
      <div className='flex-1 flex flex-col rounded-tl-xl rounded-tr-xl border items-end justify-between px-1 bg-slate-900 h-2/3'>
        <div className='flex justify-between items-center w-full p-2'>
          <Chip text={tag} size="xs" />

          <StarLevel level={interestingLevel}  />
        </div>

        <h1 className='text-2xl text-right'>{name}</h1>
      </div>

      <div className='bg-slate-100 rounded-bl-xl rounded-br-xl text-slate-900 p-1 pb-2 h-1/3 flex items-end'>
        <p className='text-sm'>{description}</p>
      </div>
    </a>
  )
}

export default ExperimentCard