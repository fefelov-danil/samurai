import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {GetUsersParametersType, UsersInitialState} from "api/uaersApi/types";
import {networkError, serverError} from "utils/error-utils";
import {AxiosError} from "axios";
import {usersAPI} from "api/uaersApi/users-api";
import {profileApi} from "api/profileApi/profile-api";
import {setLoading} from "redux/reducers/app-reducer";
import {ProfileDataType} from "api/profileApi/types";

export const getUsers = createAsyncThunk('users/getUsers',
  async (params: GetUsersParametersType, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
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
      dispatch(setLoading(false))
    }
})

export const getUserProfile = createAsyncThunk('users/getUserProfile',
  async (id: number, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
    try {
      const res = await profileApi.getProfile(id)
      await dispatch(getUserProfileStatus(id))
      return res.data
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(isFollowed(id))
      dispatch(setLoading(false))
    }
  })

export const getUserProfileStatus = createAsyncThunk('users/getUserProfileStatus',
  async (myId: number, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
    try {
      const res = await profileApi.getStatus(myId)
      return res.data
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setLoading(false))
    }
  })

export const isFollowed = createAsyncThunk('users/isFollowed',
  async (userId: number, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
    try {
      const res = await usersAPI.isFollowed(userId)
      return res.data
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setLoading(false))
    }
  })

export const followToUser = createAsyncThunk('users/followToUser',
  async (userId: number, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
    try {
      const res = await usersAPI.follow(userId)
      if (res.data.resultCode === 0) {
        return userId
      } else {
        serverError(dispatch, res.data.messages[0])
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setLoading(false))
    }
})

export const unFollowToUser = createAsyncThunk('users/unFollowToUser',
  async (userId: number, {dispatch, rejectWithValue}) => {
    dispatch(setLoading(true))
    try {
      const res = await usersAPI.unFollow(userId)
      if (res.data.resultCode === 0) {
        return userId
      } else {
        serverError(dispatch, res.data.messages[0])
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setLoading(false))
    }
  })

const sliceUsers = createSlice({
  name: 'users',
  initialState: {} as UsersInitialState,
  reducers: {
    clearUsers(state) {
      state.items = []
    },
    clearProfile(state) {
      state.userProfile = {} as ProfileDataType
    }
  },
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
    builder.addCase(isFollowed.fulfilled, (state, action) => {
      state.userProfile.isFollowed = action.payload
    })
    builder.addCase(followToUser.fulfilled, (state, action) => {
      if (state.userProfile && state.userProfile.userId === action.payload) {
        state.userProfile.isFollowed = true
      } else {
        const index = state.items?.findIndex(item => item.id === action.payload)
        state.items[index].followed = true
      }
    })
    builder.addCase(unFollowToUser.fulfilled, (state, action) => {
      if (state.userProfile && state.userProfile.userId === action.payload) {
        state.userProfile.isFollowed = false
      } else {
        const index = state.items?.findIndex(item => item.id === action.payload)
        state.items[index].followed = false
      }
    })
  }
})

export const usersReducer = sliceUsers.reducer
export const {clearUsers, clearProfile} = sliceUsers.actions

