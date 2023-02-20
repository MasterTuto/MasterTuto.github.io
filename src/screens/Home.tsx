import Lottie from 'lottie-react'
import coffee from '../assets/coffee-animation.json'
import React from 'react'
import { experiences } from '../data/work';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { experiments } from '../data/experiments';
import { HomeDetail } from '../components';

const Home = () => {

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

  const exerimentsFields = Array.from(experiments.reduce((acc, {tag}) => {
    return new Set([...acc, tag.toLowerCase()]);
  }, new Set<string>())).sort();

  // To modify mug colors, alter [0.368627011776,0.694118022919,0.450980007648,1]
  return (
    <div className="flex flex-col items-center w-full text-slate-300">
      <p className="text-xs italic">TypeScript • Open Source</p>

      <Lottie animationData={coffee} className="w-96 h-96" />
      
      <h1 className="text-4xl font-bold">Olá, eu sou <span className="text-white">Breno</span>.</h1>
      <h3 className="text-2xl py-2">Escrevo códigos. Entrego soluções. <span className='line-through decoration-1'>Bebo café.</span></h3>

      <h6 className="text-sm italic">Desenvolvedor Frontend • 3 anos de experiência • Caminhando para o fullstack</h6>

      <Icon icon="bi:chevron-double-down" className="text-4xl text-slate-300 mt-4 mb-10 animate-bounce" />

      <div className="flex flex-col gap-10">
        <HomeDetail
          title='EXPERIÊNCIA'
          icon='bi:briefcase'
          details={[
            `Em ${totalYears} anos de experiência trabalhei em ${experiences.length} empresas`,
            `Utilizando tecnologias como ${allTechnologies.join(', ')}.`
          ]}
          link='/experience'
          linkText='Ver mais sobre minhas experiências profissionais'
        />

        <HomeDetail
          title='PROJETOS'
          icon='bi:code-slash'
          details={[
            `Nesse portfolio, apresento ${projects.length} projetos de minha autoria.`,
            `Todos apresentam documentação, fotos e são de código aberto. Pode conferir no meu GitHub.`
          ]}
          link='/projects'
          linkText='Ver mais projetos de minha autoria'
        />

        <HomeDetail
          title='EXPERIMENTOS'
          icon='raphael:lab'
          details={[
            `Realizo experimentos, onde brinco com as linguagens que conheço (como HTML, CSS, JavaScript, TypeScript e Python) e faço pequenos projetos e script que julgo interessante. Geralmente de código livre e são snippets.`,
            `Atualmente tenho desafios das áreas de ${exerimentsFields.join(', ')}.`
          ]}
          link='/experiments'
          linkText='Ir ao laboratório'
        />
      </div>

      <Link to="/about-me" className="text-3xl hover:text-white mt-5">Me conheça mais!</Link>
    </div>
  )
}

export default Home