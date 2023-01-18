import React from 'react';
import {ProfileInfo} from "features/profile/profileInfo/ProfileInfo";
import {Posts} from "features/profile/posts/Posts";
import {useAppSelector} from "utils/hooks";

export const Profile = () => {
  const profile = useAppSelector(state => state.profile.profileData)
  const status = useAppSelector(state => state.profile.status)

  return (
    <>
      <ProfileInfo myOrUserProfile={'my'} profile={profile} status={status}/>
      <Posts/>
    </>
  )
}