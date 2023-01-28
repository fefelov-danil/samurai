export type ResponseType<T = {}> = {
  resultCode: number,
  messages: string[]
  data: T
}

export type DataLoginResponseType = {
  userId: number
}

export type DataAuthResponseType = {
  id: number
  email: string
  login: string
}

export type ValuesLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ProfileStatusType = string | null

export type ProfileDataType = {
  userId: null | number
  aboutMe: null | string
  contacts: ContactsType
  fullName: null | string
  lookingForAJob: boolean
  lookingForAJobDescription: null | string
  photos?: PhotosType
  isFollowed?: boolean
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

export type PhotosType = {
  large: string
  small: string
}