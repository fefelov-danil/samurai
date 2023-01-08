import React, {ReactNode} from 'react';
import s from './ProfileInfo.module.css'
import defaultAva from 'assets/images/ava.png'
import {useAppSelector} from "utils/hooks";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import {ImVk} from "react-icons/im";
import {ProfileStatusType} from "api/profile-api";
import {ChangeProfileModal} from "./modals/ChangeProfileModal";

export const ProfileInfo = () => {
  const profile = useAppSelector(state => state.profile.profileData)
  const status = useAppSelector(state => state.profile.status)

  if (profile.fullName === undefined) {
    return <h1>Loading...</h1>
  }

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
    if (status) {
      return <p className={s.status}>Статус: {status.media}</p>
    }
  }

  const renderWebsiteLink = (link: string | null) => {
    if (link) {
      return <p className={s.website}><b>My website:</b><br /><a href={link} target={'_blank'}>{link}</a></p>
    }
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.avatar}>
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
        <ChangeProfileModal
          userId={profile.userId}
          name={name}
          aboutMe={aboutMe}
          contacts={contacts}
          jobStatus={jobStatus}
          jobStatusDesc={jobStatusDesc}
        />
      </div>
    </div>
  )
}