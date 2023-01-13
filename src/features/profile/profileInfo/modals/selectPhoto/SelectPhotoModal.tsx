import React, {FC, useState} from 'react';
import s from './SelectPhotoModal.module.css'
import {Modal} from "common/modal/Modal";
import {IoIosCamera} from "react-icons/io";
import {Button} from "common/button/Button";
import {SelectImage} from "common/selectImage/SelectImage";
import {useAppDispatch} from "utils/hooks";
import {changePhoto} from "redux/reducers/profile-reducer";

type SelectPhotoModalPropsType = {
  photo: string
}

export const SelectPhotoModal: FC<SelectPhotoModalPropsType> = ({photo}) => {
  const dispatch = useAppDispatch()

  const [myPhotoForInp, setMyPhotoForInp] = useState(photo)
  const [myPhotoForChange, setMyPhotoForChange] = useState<null | File>(null)

  const selectPhotoHandler = (image: File) => {
    setMyPhotoForChange(image)

    const url = URL.createObjectURL(image)
    setMyPhotoForInp(url)
  }

  const changePhotoHandler = () => {
    if(myPhotoForChange) {
      dispatch(changePhoto(myPhotoForChange))
    }
  }

  return (
    <Modal title={'Изменить фото'} width={'small'} childrenOpenModal={
      <div className={s.changeIcon}>
        <IoIosCamera size={20} color={'#fff'}/>
      </div>}>
      <div className={s.changePhoto}>
        <img src={myPhotoForInp} alt={''}/>
        <SelectImage selectImageHandler={selectPhotoHandler} classProps={s['selectPhoto']} />
      </div>
      <Button className={s['changeBtn']} onClick={changePhotoHandler}>Изменить</Button>
    </Modal>
  );
};