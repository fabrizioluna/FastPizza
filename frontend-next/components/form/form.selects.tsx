import React, { Fragment } from 'react';
import { Selects } from './form.types';

interface SelectsProps {
  selects: Selects[];
  onChangeSelects: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  formFieldsRef: {
    current: Array<any>;
  };
  formFieldsRefLength: number;
}

export const CustomFormSelects = ({
  selects,
  onChangeSelects,
  formFieldsRef,
  formFieldsRefLength,
}: SelectsProps) => {
  return (
    <>
      {selects.map((select: Selects, index: number) => (
        <Fragment key={index}>
          <p style={{ paddingTop: '1rem', fontSize: '1rem' }}>{select.label}</p>
          <select
            style={select.selectStyles}
            name={`${select.name}`}
            onMouseEnter={() =>
              (formFieldsRef.current[
                formFieldsRefLength + index
              ].style.borderColor = '#adadad80')
            }
            ref={(re) =>
              (formFieldsRef.current[formFieldsRefLength + index] = re)
            }
            onChange={onChangeSelects}
          >
            {select.values.map((val) => (
              <option value={val.value}>{val.text}</option>
            ))}
          </select>
        </Fragment>
      ))}
    </>
  );
};

// This function comprobated if are changes in selects array.
// If have changes the component will be render again. If not, just will be omit.
function hasChanges(prev: any, next: any) {
  return prev.selects !== next.selects;
}

// For that we'll use a ReactMemo hook.
export const FormSelects = React.memo(CustomFormSelects, hasChanges);
