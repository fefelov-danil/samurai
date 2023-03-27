import React from 'react';
import style from './Loader.module.css'
import { Spin } from 'antd';

export const Loader = () => {
  return (
    <div className={style.loading}>
      <Spin size="large" />
    </div>
  );
};