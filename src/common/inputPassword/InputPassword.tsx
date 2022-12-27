import React, {
  ChangeEvent,
  DetailedHTMLProps, forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useState,
} from 'react'

import s from './InputPassword.module.css'
import {FaEye, FaEyeSlash} from "react-icons/fa";

// Пропсы стандартного инпута
type DefaultInputPasswordPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>

type InputPasswordPropsType = DefaultInputPasswordPropsType & {
  onChangePassword?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

type Ref = HTMLInputElement;

export const InputPassword = forwardRef<Ref, InputPasswordPropsType>(({
  type,
  onChange,
  onChangePassword,
  onKeyDown,
  onEnter,
  error,
  className,
  spanClassName,
  ...restProps
}, ref) => {
  const [showPass, setShowPass] = useState(false)

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangePassword && onChangePassword(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown && onKeyDown(e)
    onEnter && e.key === 'Enter' && onEnter()
  }

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
  const finalInputClassName = `${s.inputPassword} ${error && s.errorInput} ${className}`

  return (
    <p className={s.inputContainer}>
      <input
        ref={ref}
        type={showPass ? 'text' : 'password'}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      <span onClick={() => setShowPass(!showPass)}>
        {showPass ? (
          <FaEyeSlash/>
        ) : (
          <FaEye/>
        )}
      </span>

      <br/>
      {error && <span className={finalSpanClassName}>{error}</span>}
    </p>
  )
})
