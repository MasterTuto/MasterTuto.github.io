import Lottie from 'lottie-react'
import coffee from '../assets/coffee-animation.json'
import React from 'react'
import { experiences } from '../data/work';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { experiments } from '../data/experiments';
import { HomeDetail } from '../components';
import { useTranslate } from '../hooks/useTranslate';

const Home = () => {
  const translate = useTranslate();

  /* Experience */
  const currentYear = new Date().getFullYear();
  const beginYer = experiences.reduce((acc, {period}) => {
    return period[0].getFullYear() < acc ? period[0].getFullYear() : acc;
  }, Infinity);
  const totalYears = currentYear - beginYer + 1;

  const allTechnologies = Array.from(experiences.reduce((acc, {usedTechnologies}) => {
    return new Set([...acc, ...usedTechnologies]);
  }, new Set<string>())).sort();

  /* Experiments */

  const experimentsFields = Array.from(experiments.reduce((acc, {tag}) => {
    return new Set([...acc, translate(tag.toLowerCase() as any)]);
  }, new Set<string>())).sort();

  // To modify mug colors, alter [0.368627011776,0.694118022919,0.450980007648,1]
  return (
    <div className="flex flex-col items-center w-full text-slate-300">
      <p className="text-xs italic">TypeScript • Open Source</p>

      <Lottie animationData={coffee} className="w-96 h-96" />
      
      <h1 className="text-4xl font-bold">{translate('home_presentation')}<span className="text-white">Breno</span>.</h1>
      <h3 className="text-2xl py-2">{translate('home_call_text')} <span className='line-through decoration-1'>{translate('home_call_coffee')}</span></h3>

      <h6 className="text-sm italic">{translate('home_call_description')}</h6>

      <Icon icon="bi:chevron-double-down" className="text-4xl text-slate-300 mt-4 mb-10 animate-bounce" />

      <div className="flex flex-col gap-10">
        <HomeDetail
          title={translate('home_detail_experience')}
          icon='bi:briefcase'
          details={[
            translate('home_detail_experience_description_1', totalYears, experiences.length),
            translate('home_detail_experience_description_2', allTechnologies.join(', '))
          ]}
          link='/experience'
          linkText={translate('home_detail_experience_text')}
        />

        <HomeDetail
          title={translate('home_detail_projects')}
          icon='bi:code-slash'
          details={[
            translate('home_detail_projects_description_1', projects.length),
            translate('home_detail_projects_description_2')
          ]}
          link='/projects'
          linkText={translate('home_detail_projects_text')}
        />

        <HomeDetail
          title={translate('home_detail_experiments')}
          icon='raphael:lab'
          details={[
            translate('home_detail_experiments_description_1'),
            translate('home_detail_experiments_description_2', experimentsFields.join(', '))
          ]}
          link='/experiments'
          linkText={translate('home_detail_experiments_text')}
        />
      </div>

      <Link to="/about-me" className="text-3xl hover:text-white mt-5">{translate('home_detail_about')}</Link>
    </div>
  )
}

export default Home