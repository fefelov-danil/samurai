import React from 'react';
import './Profile_info.css'

export function Profile_info() {
    return (
        <div className="profile-info">
            <img
                src="https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg"
                alt=""
                className="profile-ava"/>
            <div className="profile-about">
                <p className="name">Daniil Fefelov</p>
                <p className="about">Date of Birth: 11.12.1990<br/>
                    City: Krasnoyarsk<br/>
                    Education: SFU, 2014<br/>
                    Web site: fefelow.ru</p>
            </div>
        </div>
    )
}