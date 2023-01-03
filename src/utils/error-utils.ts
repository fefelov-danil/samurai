import axios, { AxiosError } from 'axios'
import {setAppAlert} from "redux/reducers/app-reducer";
import {AnyAction, Dispatch} from "redux";
import {ResponseType} from "api/profile-api";

export const networkError = (
  e: Error | AxiosError<{ error: string }>,
  dispatch: Dispatch<AnyAction>
) => {

  const err = e as Error | AxiosError<{ error: string }>

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message

    dispatch(setAppAlert({message: error, type: 'error'}))
  } else {
    dispatch(setAppAlert( {message: err.message, type: 'error'} ))
  }
}

export const serverError = (dispatch: Dispatch<AnyAction>, response: ResponseType) => {
  if (response.messages.length) {
    dispatch(setAppAlert({message: response.messages[0], type: "error"}))
  } else {
    dispatch(setAppAlert({message: 'Some error occurred', type: "error"}))
  }
}