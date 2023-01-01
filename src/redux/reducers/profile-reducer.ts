import {v1} from "uuid";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileApi, ValuesLoginType} from "api/profile-api";
import {AxiosError} from "axios";
import {errorUtils} from "utils/error-utils";
import {setAppStatus} from "redux/reducers/app-reducer";

export const authMe = createAsyncThunk('profile/authMe', async () => {
  const res = await profileApi.authMe()
  if (res.data.resultCode === 0) {
    return {id: res.data.data.id, isLoggedIn: true}
  } else {
    return {id: null, isLoggedIn: false}
  }
})

export const login = createAsyncThunk('profile/login', async (values: ValuesLoginType, {dispatch}) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await profileApi.login(values)
    if (res.data.resultCode === 0) {
      return res.data
    } else {

    }
  } catch (e) {
    errorUtils(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setAppStatus('idle'))
  }
})

export const getProfile = createAsyncThunk('profile/getProfile', async (myId: number, {dispatch}) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await profileApi.getProfile(myId)
    return res.data
  } catch (e) {
    errorUtils(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setAppStatus('idle'))
  }
})

export const logout = createAsyncThunk('profile/logout', async (_, {dispatch}) => {
  dispatch(setAppStatus('loading'))
  try {
    const res = await profileApi.logout()
    return res.data
  } catch (e) {
    errorUtils(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setAppStatus('idle'))
  }
})

const initialState = {
  isLoggedIn: false,
  profileData: {} as ProfileDataType,
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
      if (action.payload?.resultCode === 0) {
        state.isLoggedIn = true
        state.profileData.userId = action.payload.data.userId
      }
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profileData = action.payload
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      console.log(action.payload)
      state.isLoggedIn = false
    })
  }
})

export const profileReducer = sliceProfile.reducer

// Types
type ProfileDataType = {
  userId: null | number
  aboutMe: null | string
  contacts: ContactsType
  fullName: null | string
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  photos: PhotosType
}

type ContactsType = {
  facebook: null | string
  github: null | string
  instagram: null | string
  mainLink: null | string
  twitter: null | string
  vk: null | string
  website: null | string
  youtube: null | string
}

type PhotosType = {
  large: null | string
  small: null | string
}
