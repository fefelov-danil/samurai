import React, {useEffect} from 'react';
import 'assets/css/reset.css'
import 'assets/css/style.css';
import {Header} from "common/header/Header";
import {Sidebar} from "features/sidebar/Sidebar";
import {Pages} from "common/routes/Pages";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {authMe, getProfile} from "redux/reducers/profile-reducer";
import {Alert} from "common/alert/Alert";
import {setAppLoading} from "redux/reducers/app-reducer";

export const App = () => {
  const dispatch = useAppDispatch()
  const appLoading = useAppSelector(state => state.app.appLoading)
  const isLoggedIn = useAppSelector(state => state.profile.isLoggedIn)
  const profileId = useAppSelector(state => state.profile.profileData.userId)

  useEffect(() => {
    dispatch(authMe())
      .then(() => dispatch(setAppLoading(false)))
  }, [])

  useEffect(() => {
    if (isLoggedIn && profileId) {
      dispatch(getProfile(profileId))
    }
  }, [isLoggedIn])

  if (appLoading) {
    return <h1>loading</h1>
  }

  return (
    <div className="app-wrapper">
      {isLoggedIn && (
        <>
          <Header/>
          <Sidebar/>
        </>
      )}
      <div className="app-wrapper-content">
        <Pages/>
      </div>
      <Alert />
    </div>
  );
}