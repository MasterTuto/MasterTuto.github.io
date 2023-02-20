import React from 'react'
import { useTranslate } from '../hooks/useTranslate';
import { statusTranslator } from '../shared/status';
import Chip, { ChipVariant } from './Chip';

type Props = {
  state: Status;
  selected?: boolean;
  action?: () => unknown;
}

const Status = ({state, action, selected=true}: Props) => {
  const translate = useTranslate();

  const statusTranslator2 = statusTranslator[state];

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
      text={translate(statusTranslator[state])}
      selected={selected}
      action={action}
    />
  )
}

export default Status