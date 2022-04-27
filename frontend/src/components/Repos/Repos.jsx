import React from 'react';
import cl from './Repos.module.scss'
const Repos = ({repo}) => {
    return (
        <div className={cl.reposItem}>
            <div className={cl.reposName}>name: {repo.name}</div>
            <div className={cl.reposId}>id: {repo.id}</div>
            <div className={cl.reposPushed}>pushed at: {repo.pushed_at}</div>
            <div className={cl.reposLanguages}>language: {repo.language}</div>
            <div className={cl.reposURL}>url: <a href={repo.html_url}>{repo.html_url}</a></div>
            <div className={cl.reposIssues}>open issues: {repo.open_issues}</div>
        </div>
    );
};

export default Repos;