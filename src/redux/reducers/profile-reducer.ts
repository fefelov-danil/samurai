import {v1} from "uuid";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileApi, ProfileDataType, ProfileStatusType, ValuesLoginType} from "api/profile-api";
import {AxiosError} from "axios";
import {networkError, serverError} from "utils/error-utils";
import {setAppStatus} from "redux/reducers/app-reducer";

export const authMe = createAsyncThunk('profile/authMe', async () => {
  const res = await profileApi.authMe()
  if (res.data.resultCode === 0) {
    return {id: res.data.data.id, isLoggedIn: true}
  } else {
    return {id: null, isLoggedIn: false}
  }
})

export const login = createAsyncThunk('profile/login',
  async (values: ValuesLoginType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.login(values)
      if (res.data.resultCode === 0) {
        return res.data
      } else {
        serverError(dispatch, res.data)
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  })

export const getProfile = createAsyncThunk('profile/getProfile',
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

export const changeProfile = createAsyncThunk('profile/changeProfile',
  async (profile: ProfileDataType, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.changeProfile(profile)
      if (res.data.resultCode === 0 && profile.userId) {
        dispatch(getProfile(profile.userId))
        return res.data.resultCode
      } else {
        serverError(dispatch, res.data)
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  })

export const getProfileStatus = createAsyncThunk('profile/getStatus',
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

export const logout = createAsyncThunk('profile/logout',
  async (_, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.logout()
      if (res.data.resultCode === 0) {
        return res.data
      } else {
        serverError(dispatch, res.data)
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
  })

export const changePhoto = createAsyncThunk('profile/changePhoto',
  async (photo: File, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus('loading'))
    try {
      const res = await profileApi.changePhoto({image: photo})
      if (res.data.resultCode === 0) {
        console.log(res.data)
        return res.data
      } else {
        serverError(dispatch, res.data)
        return rejectWithValue(null)
      }
    } catch (e) {
      networkError(e as Error | AxiosError<{ error: string }>, dispatch)
      return rejectWithValue(null)
    } finally {
      dispatch(setAppStatus('idle'))
    }
})

const initialState = {
  isLoggedIn: false,
  profileData: {
    photos: {small: '111', large: '111'}
  } as ProfileDataType,
  status: null as ProfileStatusType,
  posts: [
    {id: v1(), message: 'Hey, why nobody me?', likesCount: 8},
    {id: v1(), message: 'It\'s our new program!', likesCount: 12},
    {id: v1(), message: 'Hey, why nobody me?', likesCount: 10},
    {id: v1(), message: 'It\'s our new program!', likesCount: 42},
  ],
  newPostText: '',
}

export const sliceProfile = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authMe.rejected, state => {
      state.isLoggedIn = false
    })
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
      state.profileData.userId = action.payload.id
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.profileData.userId = action.payload.data.userId
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profileData = action.payload
    })
    builder.addCase(getProfileStatus.fulfilled, (state, action) => {
      state.status = action.payload
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false
    })
    builder.addCase(changePhoto.fulfilled, (state, action) => {
      state.profileData.photos = action.payload.data.photos
    })
  }
})

export const profileReducer = sliceProfile.reducer
