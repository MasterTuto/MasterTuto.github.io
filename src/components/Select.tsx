import React from 'react'

type Option = {
  value: string,
  text: string,
}

type Props<T extends Option> = {
  options: T[],
  value: T['value'],
  onChange: (value: T['value']) => void,
  className?: string,
}

const Select = <T extends Option,>(props: Props<T>) => {
  return (
    <select
      value={props.value}
      onChange={e => props.onChange(e.target.value as T['value'])}
      className={`text-sm border w-52 text-slate-800 rounded px-3 py-1 hover:bg-white hover:text-slate-800 hover:shadow-lg hover:shadow-slate-600 ${props.className}`}
    >
      {props.options.map(option => (
        <option value={option.value} key={option.value}>{option.text}</option>
      ))}
    </select>    
  )
}

export default Select