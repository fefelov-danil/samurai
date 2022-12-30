import React, {FC} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {PATHS} from "common/routes/Pages";

type PrivateAuthPropsType = {
  isLoggedIn: boolean
  children: React.ReactNode
  defaultPath?: string
}

export const PrivateAuth: FC<PrivateAuthPropsType> = ({isLoggedIn, children, defaultPath}) => {
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate
      to={defaultPath ? defaultPath : PATHS.LOGIN}
      state={{from: location.pathname}}
      replace={true}/>
  }

  return <>{children}</>
};