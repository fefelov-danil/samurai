import React, {FC} from 'react';
import s from './User.module.css'
import {followedAC, UserType} from "features/users/users-reducer";
import {useAppDispatch} from "utils/hooks";
import {Button} from "common/button/Button";

type UserPropsType = {
  user: UserType
}

export const User: FC<UserPropsType> = ({user}) => {
  const dispatch = useAppDispatch()

  const followHandler = () => {
    dispatch(followedAC(user.id))
  }

  return (
    <div className={s.user}>
      <div className={s.avatarAndFollow}>
        <div className={s.avatar} style={{backgroundImage: `url('${user.photoUrl}')`}}>
        </div>
        <Button className={s.followBtn} onClick={followHandler}>
          {user.followed ? 'Follow' : 'Unfollow'}
        </Button>
      </div>
      <div className={s.aboutUser}>
        <p className={s.name}>{user.fullName}</p>
        <p className={s.location}>{user.location.city}, {user.location.country}</p>
        <p className={s.status}>{user.status}</p>
      </div>
    </div>
  );
};