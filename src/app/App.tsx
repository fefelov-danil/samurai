import React from 'react';
import 'assets/css/reset.css'
import 'assets/css/style.css';
import {Header} from "common/header/Header";
import {Sidebar} from "features/sidebar/Sidebar";
import {Pages} from "common/routes/Pages";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className="app-wrapper-content">
        <Pages/>
      </div>
    </div>
  );
}