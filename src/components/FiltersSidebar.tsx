import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { useTranslate } from '../hooks/useTranslate';
import Chip from './Chip';
import SelectButton from './SelectButton';
import SideBar from './SideBar';

type FilterValue<T> = {
  name: string;
  text?: (v: keyof T) => string;
  value: string|string[];
};

type Props<T extends Record<string, string|string[]>> = {
  possibleFilters: {
    [key in keyof T]?: FilterValue<T>;
  }
  filters: T;
  setFilters: (filters: T) => unknown;
}

const FiltersSidebar = <T extends Record<string, string|string[]>,>(props: Props<T>) => {
  const translate = useTranslate();
  const [showSideBar, setShowSideBar] = useState(false);

  const isSelected = (key: keyof T, value: string) => {
    return props.filters[key]?.includes(value);
  }

  const handleMultiFilter = (key: keyof T, value: string) => {
    if (isSelected(key, value)) {
      props.setFilters({
        ...props.filters,
        [key]: (props.filters[key] as any[])?.filter((v: string) => v !== value),
      });
    } else {
      props.setFilters({
        ...props.filters,
        [key]: [...(props.filters[key] || []), value],
      });
    }
  }

  const renderMulti = (key: keyof T, filter: FilterValue<T>) => {
    return (
      <>
        <p className='text-sm font-bold'>{filter.name}</p>
        <div className='flex flex-row flex-wrap gap-1'>
          {(filter.value as string[])?.map((value) => (
            <Chip
              key={value}
              text={translate(props.possibleFilters[key]?.text?.(value) || value as any)}
              selected={isSelected(key, value)}
              action={() => handleMultiFilter(key, value)}
            />
          ))}
        </div>
      </>
    )
  }

  const renderSingle = (key: keyof T, filter: FilterValue<T>) => {
    return (
      <>
        <p className='text-sm font-bold'>{filter.name}</p>
        <input
          type='text'
          className='outline-none text-sm text-slate-800 p-2 rounded focus:shadow focus:shadow-slate-200 w-full'
          value={props.filters[key] || ''}
          onChange={event => props.setFilters({
            ...props.filters,
            [key]: event.target.value,
          })}
        />
      </>
    )
  }

  const hasFilterApplied = (): boolean => {
    return Object.values(props.filters).some((value) => {
      if (value === undefined) return false;

      if (Array.isArray(value)) return value.length > 0;
      return value !== '';
    });
  }

  return (
    <>
      <div className='lg:flex flex-col gap-3 px-3 hidden'>
        <p className='text-xl font-bold'>{translate('filters')}</p>

        {Object.entries(props.possibleFilters).map((entry) => {
          const [key, filter] = entry as [keyof T, FilterValue<T>];
          
          let result;
          if (!filter) result = null;
          else if (Array.isArray(filter.value)) result = renderMulti(key, filter);
          else result = renderSingle(key, filter);

          return (
            <div key={key as string} className="flex flex-col gap-1">
              {result}
            </div>
          )
        })}
      </div>

      <div className='flex flex-row gap-3 px-3 lg:hidden lg:justify-start justify-end'>
        <SideBar
          toggleButton={({show, setShow}) => (
            <div className="relative">
              <SelectButton
                text={translate('filter_btn')}
                selected={false}
                action={() => setShow(!show)}
              />
              {hasFilterApplied() && <div className='bg-red-700 w-3 h-3 rounded-full absolute -top-1 -right-1'>
              </div>}
            </div>
          )}
          >
            <p className='text-xl font-bold'>{translate('filters')}</p>

            {Object.entries(props.possibleFilters).map((entry) => {
              const [key, filter] = entry as [keyof T, FilterValue<T>];
              
              let result;
              if (!filter) result = null;
              else if (Array.isArray(filter.value)) result = renderMulti(key, filter);
              else result = renderSingle(key, filter);

              return (
                <div key={key as string} className="flex flex-col gap-1">
                  {result}
                </div>
              )
            })}
          </SideBar>
      </div>
    </>
  )
}

export default FiltersSidebar