import React from 'react';
import s from 'features/users/Users.module.css'
import {v1} from "uuid";
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {setUsersAC} from "redux/reducers/users-reducer";
import {User} from "features/users/user/User";

const initialUsers = [
  {
    id: v1(),
    photoUrl: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg',
    followed: true,
    fullName: 'Dimich',
    status: 'Пишу видео по React',
    location: {city: 'Минск', country: 'Беларусь'}
  },
  {
    id: v1(),
    photoUrl: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg',
    followed: true,
    fullName: 'Андрей',
    status: 'Обычаюсь по видео Димыча',
    location: {city: 'Красноярск', country: 'Россия'}
  },
  {
    id: v1(),
    photoUrl: 'https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg',
    followed: true,
    fullName: 'Настя',
    status: 'Обычаюсь',
    location: {city: 'Усть-Каменогорск', country: 'Казахстан'}
  },
]

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.users)

  if (users.length === 0) {
    dispatch(setUsersAC(initialUsers))
  }

  return (
    <div className={s.users}>
      <h1>Пользователи</h1>
      {users.map(u => <User key={u.id} user={u}/>)}
    </div>
  );
};