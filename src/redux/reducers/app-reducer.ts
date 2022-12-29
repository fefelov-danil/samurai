import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const sliceApp = createSlice({
  name: 'app',
  initialState: {
    appStatus: 'app boot' as AppStatusType,
    appAlert: { message: null, type: null } as AppAlertType,
  },
  reducers: {
    setAppStatus(state, action: PayloadAction<AppStatusType>) {
      state.appStatus = action.payload
    },
    setAppAlert(state, action: PayloadAction<AppAlertType>) {
      state.appAlert = action.payload
    }
  }
})

export const appReducer = sliceApp.reducer
export const {setAppStatus, setAppAlert} = sliceApp.actions


//-------------- TYPES --------------\\

type AppStatusType = 'app boot' | 'loading' | 'idle'
type AppAlertType = { message: null | string; type: AlertType }
export type AlertType = null | 'error' | 'success'
