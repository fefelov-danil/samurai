import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const profileAPI = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '4e9b0636-58a9-499c-aa39-97e8d2fc85f8'},
    credentials: 'include'
  }),
  endpoints: (build) => ({
    auth: build.query<ResponseType<DataAuthResponseType>, unknown>({
      query: () => ({
        url: `auth/me`
      })
    }),
    login: build.mutation<ResponseType<DataLoginResponseType>, LoginBodyType>({
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body
      })
    }),
    profile: build.query<any, string>({
      query: (body) => ({
        url: `profile/${body}`
      })
    })
  })
})

//----------- TYPES -----------//

type ResponseType<T = {}> = {
  resultCode: number,
  messages: string[]
  data: T
}

type DataLoginResponseType = {
  userId: string
}

type DataAuthResponseType = {
  id: string
  email: string
  login: string
}

type LoginBodyType = {
  email: string
  password: string
  rememberMe: boolean
}