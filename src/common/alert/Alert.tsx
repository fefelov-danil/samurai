import React  from 'react'
import s from './Alert.module.css'
import {useAppDispatch, useAppSelector} from 'utils/hooks'
import {setAppAlert} from "redux/reducers/app-reducer";

export function Alert() {
  const dispatch = useAppDispatch()
  const alert = useAppSelector(state => state.app.appAlert)

  if (!alert.message) return <></>

  setTimeout(() => {
    dispatch(setAppAlert({message: '', type: alert.type}))
  }, 5000)

  return (
    <div className={alert.type === 'error' ? `${s.alert} ${s.error}` : `${s.alert}  ${s.success}`}>
      {alert.message}
    </div>
  )
}
