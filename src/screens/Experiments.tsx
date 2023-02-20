import React from 'react'
import { ExperimentCard, SectionHeader } from '../components'
import { experiments } from '../data/experiments'

const Experiments = () => {
  return (
    <div className="w-full flex flex-col">
      <SectionHeader
        title="Laboratório"
        icon="raphael:lab"
        subtitle="Bem-vindos ao meu laboratório, aqui vocês podem ver alguns dos meus experimentos"
      />

      <div className="grid grid-cols-5 gap-2">
        {experiments.map(experiment => (
          <ExperimentCard {...experiment} />
        ))}
      </div>
    </div>
  )
}

export default Experiments