import { Icon } from '@iconify/react';
import React, { useState } from 'react';

type Props<S=boolean, ST=(s: S) => unknown> = {
  children: React.ReactNode,
  show?: boolean,
  toggleButton?: (a: {show: S, setShow: ST}) => React.ReactNode,
  onToggle?: (show: boolean) => void,
}

const SideBar = (props: Props) => {
  let showSideBar: boolean;
  let setShowSideBar: (show: boolean) => void;

  if (props.show === undefined || props.onToggle === undefined) {
    const sideBarState = useState(false);

    showSideBar = sideBarState[0];
    setShowSideBar = sideBarState[1];
  } else {
    showSideBar = props.show;
    setShowSideBar = props.onToggle;
  }



  return (
    <>
      <div className='lg:hidden'>
        {props.toggleButton !== undefined ? props.toggleButton({show: showSideBar, setShow: setShowSideBar}) : (
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className={`text-sm border rounded px-3 py-1 hover:bg-white hover:text-slate-800 hover:shadow-lg hover:shadow-slate-600`}
          >
            <Icon icon="ant-design:menu-outlined" />
          </button>
        )}
      </div>
      {showSideBar && (
        <div className='flex overflow-auto flex-col gap-3 h-screen bg-slate-800 p-3 absolute right-0 top-0 z-20 transition-colors lg:hidden w-screen sm:w-1/2'>
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="text-lg relative right-0 top-0 mx-3 my-1 hover:text-slate-400 self-end"
          >
            <Icon icon="ant-design:close-outlined" />
          </button>

          {props.children}
        </div>
      )}
    </>
  )
}

export default SideBar