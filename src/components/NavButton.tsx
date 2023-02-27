import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SelectButton from './SelectButton'

type NavButtonProps = {
  text: string;
  link: string;
  onClick?: () => void;
}

const NavButton = (props: NavButtonProps) => {
  const currentPath = useLocation().pathname
  const navigate = useNavigate();

  return (
    <SelectButton
      text={props.text}
      action={() => {
        navigate(props.link);
        props.onClick?.();
      }}
      selected={currentPath === props.link}
    />
  )
}

export default NavButton