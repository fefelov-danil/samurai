import {GetUsersParametersType, UsersType} from "api/uaersApi/types";
import {instance} from "api/instance-api";

export const usersAPI = {
  getUsers(data: GetUsersParametersType) {
    return instance.get<UsersType>('users', { params: { ...data } })
  }
}