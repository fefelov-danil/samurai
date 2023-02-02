import React, {FC, ReactNode, useState} from 'react';
import {Button} from "common/button/Button";
import s from "./ChangeProfileModal.module.css";
import {FaPen} from "react-icons/fa";
import {Modal} from "common/modal/Modal";
import {InputText} from "common/inputText/InputText";
import {Textarea} from "common/textarea/Textarea";
import {SubmitHandler, useForm} from "react-hook-form";
import {changeProfile} from "redux/reducers/profile-reducer";
import {useAppDispatch} from "utils/hooks";
import {Checkbox} from "common/checkbox/Checkbox";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaVk
} from "react-icons/fa";
import {FiLink} from "react-icons/fi";
import {ContactsType} from "api/profileApi/types";

type ChangeProfileModalPropsType = {
  userId: number | null
  name: string
  aboutMe: string
  contacts: ContactsType
  jobStatus: boolean
  jobStatusDesc: string
}

export const ChangeProfileModal: FC<ChangeProfileModalPropsType> = ({
                                                                      userId,
                                                                      name,
                                                                      aboutMe,
                                                                      contacts,
                                                                      jobStatus,
                                                                      jobStatusDesc
                                                                    }) => {
  const dispatch = useAppDispatch()

  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm<ChangeProfileValuesType>({
    mode: "onTouched",
    defaultValues: {
      name: name,
      aboutMe: aboutMe,
      lookingForAJob: jobStatus,
      lookingForAJobDescription: jobStatusDesc,
      mainLink: contacts.mainLink ? contacts.mainLink : '',
      github: contacts.github ? contacts.github : '',
      facebook: contacts.facebook ? contacts.facebook : '',
      vk: contacts.vk ? contacts.vk : '',
      instagram: contacts.instagram ? contacts.instagram : '',
      twitter: contacts.twitter ? contacts.twitter : '',
      youtube: contacts.youtube ? contacts.youtube : '',
      website: contacts.website ? contacts.website : ''
    }
  })

  const [openChangeModal, setOpenChangeModal] = useState<boolean | null>(null)

  const onSubmit: SubmitHandler<ChangeProfileValuesType> = async (data) => {
    const res = await dispatch(changeProfile({
      userId: userId,
      fullName: data.name ? data.name : null,
      aboutMe: data.aboutMe ? data.aboutMe : '...',
      contacts: {
        mainLink: data.mainLink ? data.mainLink : null,
        github: data.github ? data.github : null,
        facebook: data.facebook ? data.facebook : null,
        vk: data.vk ? data.vk : null,
        instagram: data.instagram ? data.instagram : null,
        twitter: data.twitter ? data.twitter : null,
        youtube: data.youtube ? data.youtube : null,
        website: data.website ? data.website : null
      },
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription ? data.lookingForAJobDescription : null,
    }))
    setOpenChangeModal(false)
  }

  const renderLinks = (nameLink: LinksType, icon: ReactNode) => {
    return (
      <label className={s.linkField}>
        <span>{icon}</span>
        <InputText
          className={s.linkInput}
          placeholder={nameLink === 'mainLink' ? 'linkedIn' : nameLink}
          {...register(nameLink)}/>
      </label>
    )
  }

  return (
    <Modal
      title={'Изменить профиль'}
      width={'normal'}
      setOpenModal={setOpenChangeModal}
      openFromProps={openChangeModal}
      childrenOpenModal={
        <Button className={s.change}>
          <FaPen size={12}/> Редакторовать профиль
        </Button>
      }>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={s.field}>
          <span>Имя:</span><br/>
          <InputText {...register('name', {required: 'Поле обязательно'})}/>
          {errors?.name && <p className={s.error}>{errors.name.message}</p>}
        </label>
        <label className={s.field}>
          <span>О себе:</span><br/>
          <Textarea className={s.aboutMe} {...register('aboutMe')}/>
        </label>
        <Checkbox className={s.lookingForAJob} {...register('lookingForAJob')}>Ищу работу</Checkbox>
        <label className={s.field}>
          <span>Опишите какую работу ищите / если уже работаете, то расскажите в двух словах:</span><br/>
          <Textarea
            className={s.lookingForAJobDescription}
            {...register('lookingForAJobDescription')}/>
        </label>
        <div className={s.links}>
          {renderLinks('mainLink', <FaLinkedinIn/>)}
          {renderLinks('github', <FaGithub/>)}
          {renderLinks('facebook', <FaFacebook/>)}
          {renderLinks('vk', <FaVk/>)}
          {renderLinks('instagram', <FaInstagram/>)}
          {renderLinks('twitter', <FaTwitter/>)}
          {renderLinks('youtube', <FaYoutube/>)}
          {renderLinks('website', <FiLink/>)}
        </div>
        <Button className={s.changeBtn} type={"submit"}>Изменить</Button>
      </form>
    </Modal>
  );
};

//----------- TYPES -----------\\
type ChangeProfileValuesType = {
  name: string
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  website: string | null
  mainLink: string | null
  github: string | null
  facebook: string | null
  vk: string | null
  instagram: string | null
  twitter: string | null
  youtube: string | null
}

type LinksType = "website" | "mainLink" | "github" | "facebook" | "vk" | "instagram" | "twitter" | "youtube"