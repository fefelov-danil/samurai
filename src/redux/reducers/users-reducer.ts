import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppStatus} from "redux/reducers/app-reducer";
import {GetUsersParametersType, UsersInitialState} from "api/uaersApi/types";
import {networkError, serverError} from "utils/error-utils";
import {AxiosError} from "axios";
import {usersAPI} from "api/uaersApi/users-api";
import {profileApi} from "api/profileApi/profile-api";

export const getUsers = createAsyncThunk('users/getUsers',
  async (params: GetUsersParametersType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await usersAPI.getUsers(params)
      if (res.data.error === null) {
        return res.data
      } else {
        serverError(dispatch, res.data.error)
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
})

export const getUserProfile = createAsyncThunk('users/getUserProfile',
  async (myId: number, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.getProfile(myId)
      return res.data
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  })

export const getUserProfileStatus = createAsyncThunk('users/getUserProfileStatus',
  async (myId: number, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.getStatus(myId)
      return res.data
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  })

const sliceUsers = createSlice({
  name: 'users',
  initialState: {} as UsersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.totalCount = action.payload.totalCount
      state.items = action.payload.items
    })
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload
    })
    builder.addCase(getUserProfileStatus.fulfilled, (state, action) => {
      state.userStatus = action.payload
    })
  }
})

export const usersReducer = sliceUsers.reducer
