import React from 'react'
import { statusTranslator } from '../shared/status';
import Chip, { ChipVariant } from './Chip';

type Props = {
  state: Status;
  selected?: boolean;
  action?: () => unknown;
}

const Status = ({state, action, selected=true}: Props) => {
  let chipVariant: ChipVariant;

  switch (state) {
    case 'abandoned':
      chipVariant = 'error';
      break;
    case 'finished':
      chipVariant = 'success';
      break;
    case 'in_progress':
      chipVariant = 'warning';
      break;
  }

  return (
    <Chip
      variant={chipVariant}
      text={statusTranslator[state]}
      selected={selected}
      action={action}
    />
  )
}

export default Status