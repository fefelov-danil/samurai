import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img
                src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg"
                alt=""
                className={s.profileAva}/>
            <div className={s.profileAbout}>
                <p className={s.name}>Daniil Fefelov</p>
                <p className={s.about}>Date of Birth: 11.12.1990<br/>
                    City: Krasnoyarsk<br/>
                    Education: SFU, 2014<br/>
                    Web site: fefelow.ru</p>
            </div>
        </div>
    )
}