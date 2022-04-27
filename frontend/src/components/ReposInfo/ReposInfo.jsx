import React from 'react';
import Repos from '../Repos/Repos';
import cl from './ReposInfo.module.scss'
const ReposInfo = ({repos}) => {
    return (
        <div>
            {repos.length> 0
                ? <div className={cl.repWrapper}>
                    <div className={cl.reposTitle}>Repositories</div>
                    {repos.map(repo => <Repos key={repo.id}repo={repo}/>)}
                </div>
                :''}
            
        </div>
    );
};

export default ReposInfo;