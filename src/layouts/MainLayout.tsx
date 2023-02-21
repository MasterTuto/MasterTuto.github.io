import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavButton, Select } from '../components'
import { TranslatorContext } from '../contexts/TranslatorContext'
import { useTranslate } from '../hooks/useTranslate'

const MainLayout = () => {
  const translate = useTranslate();
  const { language, setLanguage } = useContext(TranslatorContext);

  return (
    <div className="w-screen h-screen overflow-auto bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col">
      <nav className="flex gap-3 align-middle w-full bg-transparent border-b border-b-slate-700 shadow-slate-700 shadow py-2 px-4">
        <Link to="/" className='text-xl flex-1'>Breno CS</Link>

        <NavButton text={translate('nav_experience')} link="/experience" />
        <NavButton text={translate('nav_projects')} link="/projects" />
        <NavButton text={translate('nav_experiments')} link="/experiments" />
        <NavButton text={translate('nav_about_me')} link="/about-me" />
        <NavButton text={translate('nav_contact')} link="/contact" />

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