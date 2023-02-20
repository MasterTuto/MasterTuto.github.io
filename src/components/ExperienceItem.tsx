import React from 'react'


const ExperienceItem = (experience: WorkExperience) => {
  return (
    <div className="flex flex-col w-full gap-2 p-5">
      <div className="flex flex-row items-end gap-4">
        <h2 className='text-2xl font-bold leading-none'>{experience.company}</h2>
        <p className='text-sm leading-tight'>
          {experience.period.map((date, index) => (
            date ? (
              <span key={date.toISOString()}>
                {date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                {index < experience.period.length - 1 && ' - '}
              </span>
            ) : 'Atualmente'
          ))}
        </p>
      </div>
      <h4 className='text-sm'>{experience.place}</h4>
      <h4 className='text-lg'>{experience.position} - {experience.level}</h4>
      
      <p className='text-xs text-slate-400 pt-2'>DESCRIÇÃO:</p>
      <p className='text-sm'>{experience.description}</p>

      <p className='text-xs text-slate-400 pt-2'>TAREFAS:</p>
      <ul className='text-sm list-disc pl-10'>
        {experience.tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>

      <p className='text-xs text-slate-400 pt-2'>TECNOLOGIAS UTILIZADAS:</p>
      <span className='text-sm'>
        {experience.usedTechnologies.join(' - ')}
      </span>
    </div>
  )
}

export default ExperienceItem