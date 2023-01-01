import React from 'react';
import s from './Login.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {Button} from "common/button/Button";
import {loginSchema} from "utils/schemas/loginValidation";
import {InputText} from "common/inputText/InputText";
import {InputPassword} from "common/inputPassword/InputPassword";
import {Checkbox} from "common/checkbox/Checkbox";
import {useAppDispatch} from "utils/hooks";
import {login} from "redux/reducers/profile-reducer";

export const Login = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm<loginValues>({mode: "onTouched", resolver: yupResolver(loginSchema)})

  const onSubmit: SubmitHandler<loginValues> = (data) => {
    dispatch(login(data))
  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <InputText {...register('email')} />
          {errors?.email && <p className={s.error}>{errors.email.message}</p>}
        </label>
        <label>
          <InputPassword {...register('password')} />
          {errors?.password && <p className={s.error}>{errors.password.message}</p>}
        </label>
        <Checkbox {...register('rememberMe')}>Запомнить меня</Checkbox>
        <Button type={"submit"}>Отправить</Button>
      </form>
    </div>
  );
};

//----------- TYPES -----------\\
type loginValues = {
  email: string
  password: string
  rememberMe: boolean
}