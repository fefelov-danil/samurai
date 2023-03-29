import React, {ChangeEvent, FC} from 'react';
import s from './Pagination.module.css'
import {MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md";
import {PortionPages} from "common/pagination/PortionPages";
import {useAppSelector} from "../../utils/hooks";

type PaginationPropsType = {
  currentPage: number
  countItemsPerPage: number
  changeCountItemsPerPage: (items: number) => void
  totalCount: number | undefined
  changeCurrentPage: (page: number) => void
}

export const Pagination: FC<PaginationPropsType> = ({
                                                      totalCount,
                                                      countItemsPerPage,
                                                      changeCountItemsPerPage,
                                                      currentPage,
                                                      changeCurrentPage}) => {
  const loading = useAppSelector(state => state.app.loading)

  if (totalCount === undefined) return null

  const quantityPages = Math.ceil(totalCount / countItemsPerPage)

  const changeItemsPerPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    changeCurrentPage(1)
    changeCountItemsPerPage(+e.currentTarget.value)
  }

  const changePageHandler = (page: number) => {
    changeCurrentPage(page)
  }

  return (
    <div className={s.pagination}>
      <div className={loading ? `${s.itemsPerPage} ${s.disable}` : s.itemsPerPage}>
        <select value={countItemsPerPage} onChange={(e) => changeItemsPerPageHandler(e)}>
          <option value={16}>16</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>
      <button
        className={s.prevNext}
        onClick={() => changePageHandler(currentPage - 1)}
        disabled={currentPage === 1 || loading}>
        <MdOutlineArrowBackIosNew />
      </button>
      <div className={s.portionPages}>
        <PortionPages
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
          quantityPages={quantityPages} />
      </div>
      <button
        className={s.prevNext}
        onClick={() => changePageHandler(currentPage + 1)}
        disabled={currentPage === quantityPages || loading}>
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};