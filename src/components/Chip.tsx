import React from 'react'

export type ChipVariant = 'neutral' | 'success' | 'warning' | 'error';

type Props = {
  text: string;
  variant?: ChipVariant;
  selected?: boolean;
  action?: () => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}


const Chip = ({
  text,
  variant = 'neutral',
  selected,
  action,
  className='',
  size = 'sm',
}: Props) => {

  if (!action) {
    selected = true;
  }

  let variantStyle!: {
    text: string;
    bg: string;
  };

  if (variant == 'neutral') {
    variantStyle = {
      bg: 'bg-white',
      text: 'text-slate-800',
    }
  } else if (variant == 'success') {
    variantStyle = {
      bg: 'bg-green-800',
      text: 'white',
    };
  } else if (variant === 'error') {
    variantStyle = {
      bg: 'bg-red-800',
      text: 'white',
    };
  } else {
    variantStyle = {
      bg: 'bg-yellow-800',
      text: 'white',
    };
  }

  const colorsClasses = `hover-hover:hover:${variantStyle.bg} hover-hover:hover:${variantStyle.text} ${selected ? `${variantStyle.text} ${variantStyle.bg}` : ''}`;
  const shadowClasses = action ? `hover-hover:hover:shadow-lg hover-hover:hover:shadow-slate-600 ${selected ? `text-slate-800` : ''}` : ''
  const cursorClasses = action ? 'cursor-pointer' : 'cursor-default';

  return (
    <button onClick={action} className={`text-${size} border w-fit rounded-full px-3 py-1 ${colorsClasses} ${shadowClasses} ${className} ${cursorClasses}`}>
      {text}
    </button>
  )
}

export default Chip