import React, {useEffect, useRef, useState} from 'react'
import s from './Modal.module.css'
import {MdClose} from "react-icons/md";

type ModalProps = {
  title: string
  childrenOpenModal: React.ReactNode
  children: React.ReactNode
  openFromProps?: boolean | null
  setOpenModal?: (openModal: boolean | null) => void
  width: 'small' | 'normal' | 'big'
}

export const Modal: React.FC<ModalProps> = ({
                                              childrenOpenModal,
                                              children,
                                              title,
                                              openFromProps,
                                              setOpenModal,
                                              width
                                            }) => {

  const [open, setOpen] = useState(false)
  const modal = useRef(null as HTMLDivElement | null)

  useEffect(() => {
    if (openFromProps !== null) setOpen(!!openFromProps)
  }, [openFromProps])

  useEffect(() => {
    if (!open) return

    const handleClick = (e: any) => {
      if (!modal.current) return
      if (!modal.current.contains(e.target)) setOpen(false)
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [open])

  const classForBg = open ? `${s.screenBg} ${s.screenBgIsOpened}` : `${s.screenBg}`
  const classForModal = open ? `${s.modal} ${s.modalIsOpened} ${s[width]}` : `${s.modal} ${s[width]}`

  return (
    <div>
      <div className={classForBg}></div>
      <div ref={modal}>
        <div
          onClick={() => {
            setOpen(true)
            setOpenModal && setOpenModal(null)
          }}
        >
          {childrenOpenModal}
        </div>
        <div className={classForModal}>
          <div className={s.titleAndClose}>
            <h2>{title}</h2>
            <div className={s.modalClose}>
              <MdClose onClick={() => setOpen(false)}/>
            </div>
          </div>
          <div className={s.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  )
}
