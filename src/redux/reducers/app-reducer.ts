import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const sliceApp = createSlice({
  name: 'app',
  initialState: {
    appLoading: true,
    loading: false,
    appAlert: { message: null, type: null } as AppAlertType,
  },
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.appLoading = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setAppAlert(state, action: PayloadAction<AppAlertType>) {
      state.appAlert = action.payload
    }
  }
})

export const appReducer = sliceApp.reducer
export const {setAppLoading, setLoading, setAppAlert} = sliceApp.actions

//-------------- TYPES --------------\\

type AppAlertType = { message: null | string; type: AlertType }
export type AlertType = null | 'error' | 'success'
