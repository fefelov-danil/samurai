import {instance} from "api/instance-api";

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
    return instance.get(`profile/${userId}`)
  }
}

//-------------- TYPES --------------\\

export type ResponseType<T = {}> = {
  resultCode: number,
  messages: string[]
  data: T
}

type DataLoginResponseType = {
  userId: string
}

type DataAuthResponseType = {
  id: number
  email: string
  login: string
}

type ValuesLoginType = {
  email: string
  password: string
  rememberMe: boolean
}