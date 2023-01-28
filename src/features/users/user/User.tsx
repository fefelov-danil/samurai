import React, {FC} from 'react';
import s from './User.module.css'
import {useAppDispatch} from "utils/hooks";
import {Button} from "common/button/Button";
import {UserType} from "api/uaersApi/types";
import defaultAva from 'assets/images/ava.png'
import {NavLink} from "react-router-dom";
import {PATHS} from "common/routes/Pages";
import {followToUser, unFollowToUser} from "redux/reducers/users-reducer";

type UserPropsType = {
  user: UserType
}

export const User: FC<UserPropsType> = ({user}) => {
  const dispatch = useAppDispatch()

  const avatar = user.photos.large ? user.photos.large : defaultAva

  const followHandler = () => {
    dispatch( user.followed ? unFollowToUser(user.id) : followToUser(user.id) )
  }

  return (
    <div className={s.user}>
      <div className={s.avatarAndFollow}>
        <div className={s.avatar} style={{backgroundImage: `url('${avatar}')`}}>
        </div>
        <Button className={s.followBtn} onClick={followHandler}>
          {user.followed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
      <div className={s.aboutUser}>
        <NavLink to={`${PATHS.USER}/${user.id}`} className={s.name}>{user.name}</NavLink>
      </div>
    </div>
  );
};