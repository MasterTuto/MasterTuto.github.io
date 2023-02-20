import React from 'react';

type SelectButtonProps = {
  text: string;
  selected: boolean;
  action: () => void;
  className?: string;
}

const SelectButton = (props: SelectButtonProps) => {
  let selectedClasses = '';

  if (props.selected) {
    selectedClasses = 'bg-white text-slate-800 shadow-lg shadow-slate-600'
  }

  return (
    <button
      onClick={props.action}
      className={`text-sm border rounded px-3 py-1 hover:bg-white hover:text-slate-800 hover:shadow-lg hover:shadow-slate-600 ${selectedClasses} ${props.className}`}
    >
      {props.text}
    </button>
  )
}

export default SelectButton