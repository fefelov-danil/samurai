import React, {useEffect} from 'react';
import s from 'features/users/Users.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {getUsers} from "redux/reducers/users-reducer";
import {User} from "features/users/user/User";

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.items)

  useEffect(() => {
    dispatch(getUsers({count: 50, page: 5, term: '', friend: false}))
  }, [])

  return (
    <div className={s.users}>
      <h1>Пользователи</h1>
      {users?.map(u => <User key={u.id} user={u}/>)}
    </div>
  );
};