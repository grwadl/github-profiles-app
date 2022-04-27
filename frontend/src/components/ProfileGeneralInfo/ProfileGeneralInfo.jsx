import React from 'react';
import cl from './ProfileGeneralInfo.module.scss';
const ProfileGeneralInfo = ({generalInfo,searchedValue}) => {
    return (
        <div>
            <div className={cl.profileInfo}>
                <div className={cl.profilePhoto}>
                    <img src={searchedValue.avatar_url} />
                </div>
                <div className={cl.profileGeneralInfo}>
                    {generalInfo.map(item => <div className={cl.item} key={item.name}>{item.name}: {item.value}</div>)}
                </div>
            </div>
        </div>
    );
};

export default ProfileGeneralInfo;