import React, {FC} from 'react';
import s from './AllOrFriends.module.css'
import {useAppSelector} from "../../../../utils/hooks";

type AllOrFriendsPropsType = {
  switchUsers: (isFriends: boolean) => void
  isFriends: boolean
}

export const AllOrFriends: FC<AllOrFriendsPropsType> = ({switchUsers, isFriends}) => {
  const loading = useAppSelector(state => state.app.loading)

  const usersHandler = (isFriends: boolean) => {
    switchUsers(isFriends)
  }

  const mainClass = loading ? `${s.col} ${s.disable}` : s.col

  return (
    <div className={isFriends ? `${s.allOrFriends} ${s.onlyFriends}` : `${s.allOrFriends} ${s.allUsers}`}>
      <div className={`${mainClass} ${s.all}`} onClick={() => usersHandler(false)}>
        Все пользователи
      </div>
      <div className={`${mainClass} ${s.friends}`} onClick={() => usersHandler(true)}>
        Друзья
      </div>
    </div>
  );
};