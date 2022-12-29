import axios, { AxiosError } from 'axios'
import {setAppAlert, setAppStatus} from "redux/reducers/app-reducer";
import {AnyAction, Dispatch} from "redux";

export const errorUtils = (
  e: Error | AxiosError<{ error: string }>,
  dispatch: Dispatch<AnyAction>
) => {

  const err = e as Error | AxiosError<{ error: string }>

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message

    dispatch(setAppAlert({message: error, type: 'error'}))
  } else {
    dispatch(setAppAlert( {message: `Native error ${err.message}`, type: 'error'} ))
  }
  dispatch(setAppStatus('idle'))
}