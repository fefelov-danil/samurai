import React, {FC} from 'react';
import s from "./Pagination.module.css";

type PortionPagesPropsType = {
  totalCount: number
  currentPage: number
  changeCurrentPage: (page: number) => void
  quantityPages: number
}

export const PortionPages: FC<PortionPagesPropsType> = ({
                                                          totalCount,
                                                          currentPage,
                                                          changeCurrentPage,
                                                          quantityPages
                                                        }) => {
  const pages = []

  for (let i = 1; i <= quantityPages; i++) {
    pages.push(i)
  }

  if (totalCount === undefined) return <>111</>

  if (pages.length <= 6) {
    return (
      <>
        {pages.map(page => {
          return <button
            key={page}
            className={page === currentPage ? s.active : ''}
            onClick={() => changeCurrentPage(page)}
          >{page}</button>
        })}
      </>
    )
  }

  if (currentPage <= 4) {
    return (
      <>
        {pages.slice(0, 5).map(page => {
          return (
            <button
              key={page}
              className={page === currentPage ? s.active : ''}
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </button>
          )
        })}
        <span className={s.dots}>...</span>
        <button onClick={() => changeCurrentPage(quantityPages)}>{quantityPages}</button>
      </>
    )
  }

  if (currentPage >= quantityPages - 3) {
    return (
      <>
        <button onClick={() => changeCurrentPage(1)}>{1}</button>
        <span className={s.dots}>...</span>
        {pages.slice(quantityPages - 5, quantityPages).map(page => {
          return (
            <button
              key={page}
              className={page === currentPage ? s.active : ''}
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </button>
          )
        })}
      </>
    )
  }

  if (currentPage > 4 && currentPage < quantityPages - 3) {
    return (
      <>
        <button onClick={() => changeCurrentPage(1)}>{1}</button>
        <span className={s.dots}>...</span>
        {pages.slice(currentPage - 2, currentPage + 1).map(page => {
          return (
            <button
              key={page}
              className={page === currentPage ? s.active : ''}
              onClick={() => changeCurrentPage(page)}
            >
              {page}
            </button>
          )
        })}
        <span className={s.dots}>...</span>
        <button onClick={() => changeCurrentPage(quantityPages)}>{quantityPages}</button>
      </>
    )
  }

  return <></>
};
