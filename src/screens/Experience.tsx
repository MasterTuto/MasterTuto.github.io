import React, { useState } from 'react';
import { ExperienceItem, SectionHeader, Select, Timeline } from '../components';
import { experiences } from '../data/work';

const Experience = () => {
  const [viewAs, setViewAs] = useState<'timeline' | 'text'>('text');

  experiences.sort((a, b) => {
    const ifGreater = viewAs == 'timeline' ? 1 : -1;
    const ifLess = viewAs == 'timeline' ? -1 : 1;

    if (a.period[0] > b.period[0]) return ifGreater;
    if (a.period[0] < b.period[0]) return ifLess;
    return 0;
  });

  return (
    <div className="flex flex-col w-full">
      <SectionHeader
        title="Experiência"
        subtitle="Todos os trabalhos que já firmei contrato, ou seja, sem freelas"
      />

      <div className='pl-5'>
        <Select
          options={[
            { value: 'text', text: 'Visualizar em sequência' },
            { value: 'timeline', text: 'Visualizar em timeline' },
          ]}
          value={viewAs}
          onChange={(op) => setViewAs(op as typeof viewAs)}
        />
      </div>

      {viewAs == 'timeline' && <Timeline
        data={experiences}
        titleGetter={(item: WorkExperience) => item.company}
        dateGetter={(item: WorkExperience) => item.period[0]}
        renderItem={(item: WorkExperience) => (
          <ExperienceItem {...item} />
        )}
      />}

      {viewAs == 'text' && (
        <div className="flex flex-col">
          {experiences.map((item, index) => (
            <>
              <ExperienceItem {...item} key={index} />
              <hr className="my-4" />
            </>
          ))}
        </div>
      )}
    </div>

  )
}

export default Experience