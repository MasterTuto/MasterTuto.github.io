import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavButton, Select } from '../components'
import { TranslatorContext } from '../contexts/TranslatorContext'

const MainLayout = () => {
  const { language, setLanguage } = useContext(TranslatorContext);

  return (
    <div className="w-screen h-screen overflow-auto bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
      <nav className="flex gap-3 align-middle w-full bg-transparent border-b border-b-slate-700 shadow-slate-700 shadow py-2 px-4">
        <Link to="/" className='text-xl flex-1'>Breno CS</Link>

        <NavButton text="Experiência" link="/experience" />
        <NavButton text="Projetos" link="/projects" />
        <NavButton text="Experimentos" link="/experiments" />
        <NavButton text="Sobre mim" link="/about-me" />
        <NavButton text="Contato" link="/contact" />

        <Select
          options={[
            { value: 'en', text: 'English' },
            { value: 'pt', text: 'Português' },
          ]}
          value={language}
          onChange={lang => setLanguage(lang as 'en' | 'pt')}
        />
      </nav>

      <div className='px-12 py-5'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout