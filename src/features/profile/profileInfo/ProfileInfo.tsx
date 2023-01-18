import React, {FC, ReactNode} from 'react';
import s from './ProfileInfo.module.css'
import defaultAva from 'assets/images/ava.png'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import {ImVk} from "react-icons/im";
import {ChangeProfileModal} from "features/profile/profileInfo/modals/changeProfile/ChangeProfileModal";
import {SelectPhotoModal} from "features/profile/profileInfo/modals/selectPhoto/SelectPhotoModal";
import {ProfileDataType, ProfileStatusType} from "api/profileApi/types";

type ProfileInfoPropsType = {
  myOrUserProfile: 'my' | 'user'
  profile: ProfileDataType
  status: ProfileStatusType
}

export const ProfileInfo: FC<ProfileInfoPropsType> = ({
                                                        myOrUserProfile,
                                                        profile,
                                                        status
}) => {
  const avatar = profile.photos?.large ? profile.photos.large : defaultAva
  const name = profile.fullName ? profile.fullName : ''
  const aboutMe = profile.aboutMe ? profile.aboutMe : ''
  const contacts = profile.contacts
  const jobStatus = profile.lookingForAJob
  const jobStatusDesc = profile.lookingForAJobDescription ? profile.lookingForAJobDescription : ''

  const renderContactLink = (link: string | null, icon: ReactNode, classForLink: string = '') => {
    if (link) {
      return <a className={`${s[classForLink]}`} href={link} target={'_blank'}>{icon}</a>
    }
  }

  const renderStatus = (status: ProfileStatusType) => {
    if (status) return <p className={s.status}>Статус: {status}</p>
  }

  const renderWebsiteLink = (link: string | null) => {
    if (link) {
      return <p className={s.website}><b>My website:</b><br/><a href={link} target={'_blank'}>{link}</a></p>
    }
  }

  if (profile.fullName === undefined) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.avatar}>
        {myOrUserProfile === 'my' && <SelectPhotoModal photo={avatar}/>}
        <img
          src={avatar}
          alt="avatar"
          className={s.profileAva}/>
        <span className={jobStatus ? s.jobStatusTrue : s.jobStatusFalse}>#OpenToWork</span>
      </div>
      <div className={s.profileAbout}>
        <p className={s.name}>{name}</p>
        {renderStatus(status)}
        <p className={s.job}>{jobStatusDesc}</p>
        <p className={s.aboutMe}><b>О себе:<br/></b>{aboutMe}</p>
        {renderWebsiteLink(contacts.website)}
        <div className={s.contacts}>
          {renderContactLink(contacts.mainLink, <FaLinkedin/>)}
          {renderContactLink(contacts.github, <FaGithubSquare/>)}
          {renderContactLink(contacts.facebook, <FaFacebookSquare/>)}
          {renderContactLink(contacts.vk, <ImVk/>, 'vk')}
          {renderContactLink(contacts.instagram, <FaInstagramSquare/>)}
          {renderContactLink(contacts.twitter, <FaTwitterSquare/>)}
          {renderContactLink(contacts.youtube, <FaYoutubeSquare/>)}
        </div>
        {myOrUserProfile === 'my' && <ChangeProfileModal
          userId={profile.userId}
          name={name}
          aboutMe={aboutMe}
          contacts={contacts}
          jobStatus={jobStatus}
          jobStatusDesc={jobStatusDesc}
        />}
      </div>
    </div>
  )
}