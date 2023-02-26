import React, {useEffect} from 'react';
import s from 'features/users/Users.module.css'
import {useAppDispatch, useAppSelector} from "utils/hooks";
import {
  changeCountItemsPerPage,
  changeCurrentPage,
  changeIsFriends, changeSearchValue,
  clearUsers,
  getUsers
} from "redux/reducers/users-reducer";
import {User} from "features/users/user/User";
import {AllOrFriends} from "features/users/filters/all-or-friends/AllOrFriends";
import {InputSearch} from "features/users/filters/search/InputSearch";
import {Pagination} from "common/pagination/Pagination";

export const Users = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.items)
  const totalCount = useAppSelector(state => state.users.totalCount)
  const page = useAppSelector(state => state.users.currentPage)
  const count = useAppSelector(state => state.users.countItemsPerPage)
  const isFriends = useAppSelector(state => state.users.isFriends)
  const searchValue = useAppSelector(state => state.users.searchValue)

  useEffect(() => {
    dispatch(getUsers({count: count, page: page, term: searchValue, friend: isFriends}))

    return () => {
      dispatch(clearUsers())
    }
  }, [isFriends, searchValue, page, count])

  const switchUsers = (isFriends: boolean) => {
    dispatch(changeIsFriends(isFriends))
    dispatch(changeCurrentPage(1))
    dispatch(changeCountItemsPerPage(16))
  }

  const changeInputSearch = (value: string) => {
    dispatch(changeSearchValue(value))
  }

  const changeCountItemsPerPageHandler = (items: number) => {
    dispatch(changeCountItemsPerPage(items))
  }

  const changeCurrentPageHandler = (page: number) => {
    dispatch(changeCurrentPage(page))
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
        changeCountItemsPerPage={changeCountItemsPerPageHandler}
        totalCount={totalCount}
        changeCurrentPage={changeCurrentPageHandler} />
    </div>
  );
};