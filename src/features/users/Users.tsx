import React, {useEffect, useState} from 'react';
import s from 'features/users/Users.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {clearUsers, getUsers} from "redux/reducers/users-reducer";
import {User} from "features/users/user/User";
import {AllOrFriends} from "features/users/filters/all-or-friends/AllOrFriends";
import {InputSearch} from "features/users/filters/search/InputSearch";

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.items)

  const [isFriends, setIsFriends] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(12)

  useEffect(() => {
    dispatch(getUsers({count: count, page: page, term: searchValue, friend: isFriends}))

    return () => {
      dispatch(clearUsers())
    }
  }, [isFriends, searchValue])

  const switchUsers = (isFriends: boolean) => {
    setIsFriends(isFriends)
  }

  const changeInputSearch = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className={s.users}>
      <h1>Пользователи</h1>
      <div className={s.filters}>
        <AllOrFriends switchUsers={switchUsers} isFriends={isFriends} />
        <InputSearch
          className={s.inpSearch}
          changeInputSearchValue={changeInputSearch}
          placeholder={'Введите имя для поиска'} />
      </div>
      <div className={s.userColumns}>
        {users?.map(u => <User key={u.id} user={u}/>)}
      </div>
    </div>
  );
};