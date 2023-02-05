import React, {FC} from 'react';
import s from './AllOrFriends.module.css'

type AllOrFriendsPropsType = {
  switchUsers: (isFriends: boolean) => void
  isFriends: boolean
}

export const AllOrFriends: FC<AllOrFriendsPropsType> = ({switchUsers, isFriends}) => {

  const usersHandler = (isFriends: boolean) => {
    switchUsers(isFriends)
  }

  return (
    <div className={isFriends ? `${s.allOrFriends} ${s.onlyFriends}` : `${s.allOrFriends} ${s.allUsers}`}>
      <div className={`${s.col} ${s.all}`} onClick={() => usersHandler(false)}>
        Все пользователи
      </div>
      <div className={`${s.col} ${s.friends}`} onClick={() => usersHandler(true)}>
        Друзья
      </div>
    </div>
  );
};