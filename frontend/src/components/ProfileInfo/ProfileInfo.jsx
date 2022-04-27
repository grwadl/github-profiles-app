import React from 'react';
import CleanPage from '../CleanPage/CleanPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProfileGeneralInfo from '../ProfileGeneralInfo/ProfileGeneralInfo';
import ReposInfo from '../ReposInfo/ReposInfo';
import cl from './ProfileInfo.module.scss';
const ProfileInfo = ({ searchDirty, searchResultError, searchedValue, repos }) => {
    const generalInfo = [{ name: 'Name', value: searchedValue.login }, { name: 'id', value: searchedValue.id }, { name: 'url', value: searchedValue.html_url }, { name: 'last update', value: searchedValue.updated_at }, { name: 'quantity of public repos', value: searchedValue.public_repos }];
    return (
        <div className={cl.generalWrapper}>
            {
                !searchDirty
                    ? <CleanPage/>
                    : <div className={cl.searchResults}>
                        {
                            searchResultError ? <ErrorPage/>
                                : <div><ProfileGeneralInfo generalInfo={generalInfo} searchedValue={searchedValue} /><ReposInfo repos={repos} /></div>
                        }
                    </div>
            }
        </div>
    );
};

export default ProfileInfo;