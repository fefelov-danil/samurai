import {instance, instancePhoto} from "api/instance-api";
import {
  ResponseType,
  DataAuthResponseType, DataLoginResponseType,
  PhotosType,
  ProfileDataType,
  ProfileStatusType,
  ValuesLoginType
} from "api/profileApi/types";

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
    return instance.put<ResponseType<ProfileDataType>>(`profile`, data)
  },
  getStatus(userId: number) {
    return instance.get<ProfileStatusType>(`profile/status/${userId}`)
  },
  changePhoto(data: { image: File }) {
    return instancePhoto.put<ResponseType<{photos: PhotosType}>>(`profile/photo`, data)
  }
}