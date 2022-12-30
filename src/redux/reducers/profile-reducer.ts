import {v1} from "uuid";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {profileApi} from "api/profile-api";
import {AxiosError} from "axios";
import {errorUtils} from "utils/error-utils";
import {setAppStatus} from "redux/reducers/app-reducer";

export const authMe = createAsyncThunk('profile/authMe', async () => {
  const res = await profileApi.authMe()
  return res.data
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
      if (action.payload.resultCode === 0) {
        state.profileData.id = action.payload.data.id
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
    })
  }
})

export const profileReducer = sliceProfile.reducer

// Types
type ProfileDataType = {
  id: number
}

