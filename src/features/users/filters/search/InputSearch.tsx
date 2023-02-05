import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useState} from 'react';
import s from './InputSearch.module.css'

type DefaultInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputSearchPropsType = DefaultInputTextPropsType & {
  changeSearchInputValue: (value: string) => void
}

export const InputSearch: FC<InputSearchPropsType> = ({changeSearchInputValue, ...restProps}) => {
  const [value, setValue] = useState<string>('')

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div>
      <input
        value={value}
        type={'text'}
        onChange={onChangeCallback}
        className={s.inputSearch}
        {...restProps}
      />
    </div>
  );
};