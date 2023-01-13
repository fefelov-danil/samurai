import React, {ChangeEvent, FC} from 'react';
import {FaCamera} from "react-icons/fa";

type SelectImagePropsType = {
  selectImageHandler: (image: File) => void
  classProps?: string
}

export const SelectImage: FC<SelectImagePropsType> = ({selectImageHandler, classProps}) => {
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      selectImageHandler(e.target.files[0])
    }
  }

  return (
    <label className={classProps ? classProps : ''}>
      <input
        type="file"
        onChange={uploadHandler}
        style={{ display: 'none' }}
      />
      <span>
        <FaCamera />
      </span>
    </label>
  );
};