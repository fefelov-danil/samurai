import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {getUserProfile, getUserProfileStatus} from "redux/reducers/users-reducer";
import {ProfileInfo} from "features/profile/profileInfo/ProfileInfo";

export const PageUser = () => {
  const dispatch = useAppDispatch()
  const appStatus = useAppSelector(state => state.app.appStatus)
  const userProfile = useAppSelector(state => state.users.userProfile)
  const userStatus = useAppSelector(state => state.users.userStatus)
  const { id } = useParams()

  useEffect(() => {
    if (id ) {
      dispatch(getUserProfile(+id))
      dispatch(getUserProfileStatus(+id))
    }
  }, [id])

  if (appStatus === 'loading' || userProfile === undefined) {
    return <h1>Loading...</h1>
  }

  return (
    <ProfileInfo myOrUserProfile={'user'} profile={userProfile} status={userStatus} />
  );
};