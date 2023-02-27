import { Icon } from '@iconify/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TranslatorContext } from '../contexts/TranslatorContext'
import { useTranslate } from '../hooks/useTranslate'
import NavButton from './NavButton'
import Select from './Select'
import SideBar from './SideBar'

type Props = {}

const NavBar = (props: Props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const translate = useTranslate();

  const { language, setLanguage } = useContext(TranslatorContext);

  const navItems = (
    <>
      <NavButton text={translate('nav_experience')} link="/experience" onClick={() => setShowSideBar(false)}/>
      <NavButton text={translate('nav_projects')} link="/projects" onClick={() => setShowSideBar(false)}/>
      <NavButton text={translate('nav_experiments')} link="/experiments" onClick={() => setShowSideBar(false)}/>
      <NavButton text={translate('nav_about_me')} link="/about-me" onClick={() => setShowSideBar(false)}/>
      <NavButton text={translate('nav_contact')} link="/contact" onClick={() => setShowSideBar(false)}/>
    </>
  )

  return (
    <nav className="flex gap-3 align-middle md:w-full bg-slate-800 sticky top-0 left-0 border-b z-20 border-b-slate-700 shadow-slate-700 shadow py-2 px-4 w-screen">
        <Link to="/" className='text-xl flex-1'>Breno CS</Link>

        <div className='gap-3 hidden lg:flex z-50'>
          {navItems}

          <Select
            options={[
              { value: 'en', text: 'English' },
              { value: 'pt', text: 'Português' },
            ]}
            value={language}
            onChange={lang => setLanguage(lang as 'en' | 'pt')}
          />
        </div>

        <div className='flex gap-3 lg:hidden'>
          <SideBar show={showSideBar} onToggle={setShowSideBar}>
            <Select
              options={[
                { value: 'en', text: 'English' },
                { value: 'pt', text: 'Português' },
              ]}
              className='w-full sm:w-auto'
              value={language}
              onChange={lang => setLanguage(lang as 'en' | 'pt')}
            />

            {navItems}
          </SideBar>
        </div>
      </nav>
  )
}

export default NavBar