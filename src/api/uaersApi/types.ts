import {PhotosType, ProfileDataType} from "api/profileApi/types";

export type UsersInitialState = {
  items: UserType[]
  totalCount: number
  error: string
  userProfile: ProfileDataType
  userStatus: string | null
}

export type GetUsersParametersType = {
  count: number
  page: number
  term: string
  friend: boolean
}

export type UsersType = {
  items: UserType[]
  totalCount: number
  error: string
}

export type UserType = {
  id: number
  name: string | null
  status: string | null
  photos: PhotosType
  followed: boolean
}