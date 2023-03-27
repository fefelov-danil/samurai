import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {getUserProfile} from "redux/reducers/users-reducer";
import {ProfileInfo} from "features/profile/profileInfo/ProfileInfo";
import {Loader} from "../../../common/loading/Loader";

export const PageUser = () => {
  const dispatch = useAppDispatch()
  const userProfile = useAppSelector(state => state.users.userProfile)
  const userStatus = useAppSelector(state => state.users.userStatus)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(getUserProfile(+id))
    }
  }, [id])

  if (!userProfile?.fullName) {
    return <Loader />
  }

  return (
    <ProfileInfo
      myOrUserProfile={'user'}
      profile={userProfile}
      status={userStatus}/>
  );
};