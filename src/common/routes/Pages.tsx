import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "features/profile/Profile";
import {News} from "features/news/News";
import {Music} from "features/music/Music";
import {Settings} from "features/settings/Settings";
import {Dialogs} from "features/dialogs/Dialogs";
import {Users} from "features/users/Users";
import {Login} from "features/profile/login/Login";

export const PATHS = {
  MESSAGES: '/messages',
  PROFILE: '/profile',
  USERS: '/users',
  NEWS: '/news',
  MUSIC: '/music',
  SETTINGS: '/settings',
  LOGIN: '/login'
}

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATHS.MESSAGES} element={<Dialogs/>} />
      <Route path={PATHS.PROFILE} element={<Profile/>}/>
      <Route path={PATHS.NEWS} element={<News/>}/>
      <Route path={PATHS.MUSIC} element={<Music/>}/>
      <Route path={PATHS.USERS} element={<Users/>}/>
      <Route path={PATHS.SETTINGS} element={<Settings/>}/>
      <Route path={PATHS.LOGIN} element={<Login/>}/>
    </Routes>
  );
};