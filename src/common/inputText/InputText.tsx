import React, {ChangeEvent, DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent} from 'react'

import s from 'common/inputText/InputText.module.css'

// Пропсы стандартного инпута
type DefaultInputTextPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type InputTextPropsType = DefaultInputTextPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

type Ref = HTMLInputElement;

export const InputText = forwardRef<Ref, InputTextPropsType>(({
  type,
  onChange,
  onChangeText,
  onKeyDown,
  onEnter,
  error,
  className,
  spanClassName,
  ...restProps
}, ref) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown && onKeyDown(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
  const finalInputClassName = `${s.inputText} ${error && s.errorInput} ${className}`

  return (
    <>
      <input
        ref={ref}
        type={'text'}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  )
})