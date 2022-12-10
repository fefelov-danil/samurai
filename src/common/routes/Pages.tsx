import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Profile} from "components/content/profile/Profile";
import {News} from "components/content/news/News";
import {Music} from "components/content/music/Music";
import {Settings} from "components/content/settings/Settings";
import {Dialogs} from "components/content/dialogs/Dialogs";

export const PATHS = {
  MESSAGES: '/messages',
  PROFILE: '/profile',
  NEWS: '/news',
  MUSIC: '/music',
  SETTINGS: '/settings'
}

export const Pages = () => {
  return (
    <Routes>
      <Route path={PATHS.MESSAGES} element={<Dialogs/>} />
      <Route path={PATHS.PROFILE} element={<Profile/>}/>
      <Route path={PATHS.NEWS} element={<News/>}/>
      <Route path={PATHS.MUSIC} element={<Music/>}/>
      <Route path={PATHS.SETTINGS} element={<Settings/>}/>
    </Routes>
  );
};