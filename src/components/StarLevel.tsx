import { Icon } from '@iconify/react';
import colors, { yellow } from 'tailwindcss/colors';
import React from 'react'

type Props = {
  level: number; // 0-10
  className?: string;
}

const StarLevel = ({level, className}: Props) => {
  const numberOfFilledStars = Math.round(level / 2);
  const numberOfUnfilledStars = 5 - numberOfFilledStars;


  return (
    <div className={`flex flex-row gap-1 ${className}`}>
      {[...Array(numberOfFilledStars)].map((_, index) => (
        <Icon icon="ic:baseline-star" key={index} width={16} color={colors.yellow[600]} />  
      ))}

      {[...Array(numberOfUnfilledStars)].map((_, index) => (
        <Icon icon="ic:baseline-star-border" key={index} width={16} color={colors.yellow[600]} />  
      ))}
    </div>
  )
}

export default StarLevel