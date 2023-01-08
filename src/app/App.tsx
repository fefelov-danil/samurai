import React, {useEffect} from 'react';
import 'assets/css/reset.css'
import 'assets/css/style.css';
import {Header} from "common/header/Header";
import {Sidebar} from "features/sidebar/Sidebar";
import {Pages} from "common/routes/Pages";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {authMe, getProfile, getProfileStatus} from "redux/reducers/profile-reducer";
import {Alert} from "common/alert/Alert";
import {setAppStatus} from "redux/reducers/app-reducer";

export const App = () => {
  const dispatch = useAppDispatch()
  const appStatus = useAppSelector(state => state.app.appStatus)
  const isLoggedIn = useAppSelector(state => state.profile.isLoggedIn)
  const profile = useAppSelector(state => state.profile.profileData)

  useEffect(() => {
    dispatch(authMe())
      .then(() => dispatch(setAppStatus('idle')))
  }, [])

  useEffect(() => {
    if (isLoggedIn && profile.userId) {
      dispatch(getProfile(profile.userId))
      dispatch(getProfileStatus(profile.userId))
    }
  }, [isLoggedIn])

  if (appStatus === 'total loading') {
    return <h1>loading</h1>
  }

  return (
    <div className="app-wrapper">
      {appStatus === 'loading' && <h1 style={{position: 'absolute'}}>loading</h1>}
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