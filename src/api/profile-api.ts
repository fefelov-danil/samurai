import {instance, instancePhoto} from "api/instance-api";

export const profileApi = {
  authMe() {
    return instance.get<ResponseType<DataAuthResponseType>>(`auth/me`)
  },
  login(values: ValuesLoginType) {
    return instance.post<ResponseType<DataLoginResponseType>>(`auth/login`, values)
  },
  logout() {
    return instance.delete<ResponseType>(`auth/login`)
  },
  getProfile(userId: number) {
    return instance.get<ProfileDataType>(`profile/${userId}`)
  },
  changeProfile(data: ProfileDataType) {
    return instance.put<ResponseType<ProfileDataType>>('profile', data)
  },
  getStatus(userId: number) {
    return instance.get<ProfileStatusType>(`profile/status/${userId}`)
  },
  changePhoto(data: { image: File }) {
    return instancePhoto.put<ResponseType<{photos: PhotosType}>>('profile/photo', data)
  }
}

//-------------- TYPES --------------\\

export type ResponseType<T = {}> = {
  resultCode: number,
  messages: string[]
  data: T
}

type DataLoginResponseType = {
  userId: number
}

type DataAuthResponseType = {
  id: number
  email: string
  login: string
}

export type ValuesLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ProfileStatusType = {
  media: string
  type: any
} | null

export type ProfileDataType = {
  userId: null | number
  aboutMe: null | string
  contacts: ContactsType
  fullName: null | string
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  photos?: PhotosType
}

export type ContactsType = {
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
  large: string
  small: string
}