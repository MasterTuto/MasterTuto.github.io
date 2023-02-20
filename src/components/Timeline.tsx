import React from 'react'
import SelectButton from './SelectButton';

type Props<T> = {
  data: T[],
  titleGetter: (item: T) => string,
  dateGetter: (item: T) => Date,
  renderItem: (item: T) => JSX.Element,
  renderEmpty?: () => JSX.Element
}

const Timeline = <T,>(props: Props<T>) => {
  const getName = (item: T) => {
    return props.titleGetter(item) + props.dateGetter(item).getTime();
  }

  const [currentItem, setCurrentItem] = React.useState<string | null>(() => 
    getName(props.data[0])
  );

  const years = props.data.reduce((acc, item) => {
    const year = props.dateGetter(item).getFullYear();
    if (!acc.includes(year)) {
      acc.push(year);
    }
    return acc;
  }, [] as number[]);

  if (years.length) {
    years.push(years[years.length - 1] + 1);
  }

  const showItem = (item: T) => {
    setCurrentItem(getName(item));
  }

  return (
    <div className="flex flex-col w-full gap-2">
      
      {/* Years */}
      <div className="flex flex-row border-b overflow-x-auto py-2 mt-10">
        <div className="w-3 grow-0 shrink-0 h-1 bg-slate-100 rounded mt-3" />
        {years.map((year, index) => (
          <div className={`flex shrink-0 ${index < years.length-1 ? 'grow' : ''}`} key={year}>
            <span className='text-white px-1'>{year}</span>
            
            {index !== years.length - 1 && (
              <div className='flex flex-col grow shrink-0'>
                <div className="h-1 bg-slate-100 rounded grow mt-3" />
                <div className='flex flex-row'>
                  {props.data.filter(item => props.dateGetter(item).getFullYear() === year).map(item => (
                    <div className="flex flex-col items-center">
                      <div className='h-3 bg-slate-100 w-1' />
                      <SelectButton
                        text={props.titleGetter(item)}
                        selected={currentItem === getName(item)}
                        action={() => showItem(item)}
                        className='m-2 mt-0'
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="w-3 grow-0 shrink-0 h-1 bg-slate-100 rounded mt-3" />
      </div>

      {/* Item Details */}
      {currentItem && (
        <div className="flex flex-col gap-2">
          {props.data.filter(item => getName(item) === currentItem).map(props.renderItem)}
        </div>
      )}
    </div>
  )
}

export default Timeline