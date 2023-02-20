import { Icon } from '@iconify/react';
import React from 'react'

type Props = {
  title: string,
  icon?: string;
  subtitle: string,
}

const SectionHeader = ({subtitle, title, icon}: Props) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <h1 className="text-4xl font-bold text-center">{title}</h1>

        {icon && <Icon icon={icon} width={46} />}
      </div>
      <h3 className="text-2xl py-2 text-center">{subtitle}</h3>

      <hr className="border-gray-200 mb-5" />
    </>
  )
}

export default SectionHeader