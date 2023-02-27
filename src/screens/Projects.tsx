import React from 'react'
import { FiltersSidebar, ProjectCard, SectionHeader } from '../components'
import { projects } from '../data/projects';
import { useTranslate } from '../hooks/useTranslate';
import { statusTranslator } from '../shared/status';

const Projects = () => {
  const translate = useTranslate();

  const [filters, setFilters] = React.useState<ProjectFilters>({});

  const techs = React.useMemo(() => {
    const techs = new Set<string>()
    projects.forEach(project => {
      project.usedTechnologies.forEach(tech => {
        techs.add(tech)
      })
    })  
    return Array.from(techs).sort();
  }, []);

  const possibleFilters = {
    query: {
      name: translate('projects_filter_query'),
      value: '',
    },
    status: {
      name: 'Status',
      text: (value: string) => statusTranslator[value as keyof typeof statusTranslator],
      value: [
        'finished',
        'in_progress',
        'abandoned',
      ],
    },
    techs: {
      name: translate('projects_filter_techs'),
      value: techs,
    },
  }

  const filteredProjects = projects.filter(project => {
    const query = filters?.query?.toLowerCase() || '';
    const status = filters?.status?.length ? filters?.status : project.status;
    const techs = filters?.techs?.length ? filters?.techs : project.usedTechnologies;
    
    if (
      (project.name.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase())) &&
      status?.includes(project.status) &&
      project.usedTechnologies.some(tech => techs?.includes(tech))
    ) {
      return true
    }

    return false;
  }).sort((project1, project2) => {
    const statusPriorities: Record<Status, number> = {
      finished: 1,
      in_progress: 2,
      abandoned: 3,
    };

    let result: number = statusPriorities[project1.status] - statusPriorities[project2.status];

    if (result == 0) {
      if (project1.name < project2.name)
        return -1;
      
      if (project1.name > project2.name)
        return 1;
      
      return 0;
    }

    return result;
  })

  return (
    <div className='flex-1 flex flex-col w-full'>
      <SectionHeader
        title={translate('projects_title')}
        subtitle={translate('projects_subtitle')}
      />

      <div className='flex lg:flex-row w-full gap-3 flex-col'>
        <div className='flex flex-col lg:w-1/4 w-full'>
          <FiltersSidebar
            possibleFilters={possibleFilters}
            filters={filters}
            setFilters={setFilters}
          />
        </div>

        <div className='flex flex-col lg:w-3/4 gap-4 overflow-auto h-full max-h-full w-full'>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.name}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects