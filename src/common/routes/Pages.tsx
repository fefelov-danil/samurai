import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "features/profile/Profile";
import {News} from "features/news/News";
import {Music} from "features/music/Music";
import {Settings} from "features/settings/Settings";
import {Dialogs} from "features/dialogs/Dialogs";
import {Users} from "features/users/Users";
import {Login} from "features/profile/login/Login";
import {useAppSelector} from "utils/hooks";
import {PrivateAuth} from "utils/hoc/PrivateAuth";
import {PageUser} from "features/users/pageUser/PageUser";

export const PATHS = {
  LOGIN: '/login',
  NEWS: '/',
  PROFILE: '/profile',
  FRIENDS: '/friends',
  SETTINGS: '/settings',
  MESSAGES: '/messages',
  USERS: '/users',
  USER: '/user',
  MUSIC: '/music'
}

export const Pages = () => {
  const isLoggedIn = useAppSelector(state => state.profile.isLoggedIn)

  return (
    <Routes>
      <Route path={PATHS.LOGIN} element={
        <PrivateAuth isLoggedIn={!isLoggedIn} defaultPath={PATHS.PROFILE}>
          <Login/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.PROFILE} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <Profile/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.NEWS} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <News/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.SETTINGS} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <Settings/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.MESSAGES} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <Dialogs/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.MUSIC} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <Music/>
        </PrivateAuth>
      }/>
      <Route path={PATHS.USERS} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <Users/>
        </PrivateAuth>
      }/>
      <Route path={`${PATHS.USER}/:id`} element={
        <PrivateAuth isLoggedIn={isLoggedIn}>
          <PageUser/>
        </PrivateAuth>
      }/>
    </Routes>
  );
};