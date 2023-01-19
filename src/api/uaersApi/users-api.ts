import {GetUsersParametersType, UsersType} from "api/uaersApi/types";
import {instance} from "api/instance-api";
import {ResponseType} from "api/profileApi/types";

export const usersAPI = {
  getUsers(data: GetUsersParametersType) {
    return instance.get<UsersType>(`users`, { params: { ...data } })
  },
  isFollowed(userId: number) {
    return instance.get<ResponseType>(`follow/${userId}`)
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`)
  },
  unFollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`)
  }
}