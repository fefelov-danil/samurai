import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useState} from 'react';
import s from './InputSearch.module.css'
import {useDebounce} from "utils/hooks/useDebounce";
import {BiSearch} from "react-icons/bi";

type DefaultInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputSearchPropsType = DefaultInputTextPropsType & {
  changeInputSearchValue: (value: string) => void
}

export const InputSearch: FC<InputSearchPropsType> = ({changeInputSearchValue, className, ...restProps}) => {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 700)

  useEffect(() => {
    changeInputSearchValue(value)
  }, [debouncedValue])

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <p className={s.inputContainer}>
      <BiSearch />
      <input
        value={value}
        type={'text'}
        onChange={onChangeCallback}
        className={`${s.inputSearch} ${className}`}
        {...restProps}
      />
    </p>
  );
};