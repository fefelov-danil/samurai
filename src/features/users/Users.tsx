import React, {useEffect, useState} from 'react';
import s from 'features/users/Users.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {clearUsers, getUsers} from "redux/reducers/users-reducer";
import {User} from "features/users/user/User";
import {AllOrFriends} from "features/users/filters/all-or-friends/AllOrFriends";
import {InputSearch} from "features/users/filters/search/InputSearch";
import {Pagination} from "common/pagination/Pagination";

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.items)
  const totalCount = useAppSelector(state => state.users.totalCount)

  const [isFriends, setIsFriends] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(16)

  useEffect(() => {
    dispatch(getUsers({count: count, page: page, term: searchValue, friend: isFriends}))

    return () => {
      dispatch(clearUsers())
    }
  }, [isFriends, searchValue, page, count])

  const switchUsers = (isFriends: boolean) => {
    setIsFriends(isFriends)
    setPage(1)
    setCount(16)
  }

  const changeInputSearch = (value: string) => {
    setSearchValue(value)
  }

  const changeCountItemsPerPage = (items: number) => {
    setCount(items)
  }

  const changeCurrentPage = (page: number) => {
    setPage(page)
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
      <Pagination
        currentPage={page}
        countItemsPerPage={count}
        changeCountItemsPerPage={changeCountItemsPerPage}
        totalCount={totalCount}
        changeCurrentPage={changeCurrentPage} />
    </div>
  );
};