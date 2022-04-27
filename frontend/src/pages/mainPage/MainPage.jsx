import React, { useContext, useState } from 'react';
import MyButton from '../../components/UI/myButton/MyButton';
import MyInput from '../../components/UI/myInput/MyInput';
import cl from './MainPage.module.scss';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import Loading from '../../components/UI/animations/Loading';
import { searchOnGit } from '../../API/GitHubApi1';
import AuthContext from '../../context/AuthContext';
const MainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchQueryError, setSearchQueryError] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);
    const [searchResultError, setSearchResultError] = useState(false);
    const [searchedValue, setSearchedValue] = useState({});
    const [searchDirty, setSearchDirty] = useState(false);
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userId,redirectedValue,setRedirectedValue } = useContext(AuthContext);
    const validateSearchQuery = (e) => {
        setSearchQuery(e.target.value);
        const re = /^[a-zA-Z0-9_-]+$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setSearchQueryError('Unvalid username, try again !');
            setDisabledButton(true);
        }
        else {
            setSearchQueryError('');
            setDisabledButton(false);
        }
    }
    if (isLoading)
    {
        return <Loading/>
    }
    if (redirectedValue !== '')
    {
        searchOnGit(setIsLoading, setSearchDirty, setSearchedValue, setSearchResultError, setRepos, redirectedValue, userId);
        setRedirectedValue('');
        }
    
            return (
                <div className={cl.MainPage}>
                    <div className={cl.MainPageWrapper}>
                        <div className={cl.SearchbarTitle}>SEARCH BAR</div>
                        <div className={cl.MainPageSearchBar}>
                            <MyInput classnameinput={searchQueryError.length === 0 ? '' : 'errorInput'} label='name' placeholder='name'value={searchQuery} onChange={e => validateSearchQuery(e)} />
                            <MyButton onClick={()=>searchOnGit(setIsLoading, setSearchDirty, setSearchedValue, setSearchResultError,setRepos, searchQuery,userId)} disabled={disabledButton}>Search</MyButton>
                            {searchQueryError &&
                                <div className={cl.errorBlock}>{searchQueryError} </div>
                            }
                        </div>
                        <ProfileInfo searchDirty={searchDirty}  searchResultError={searchResultError} searchedValue={searchedValue} repos={repos}/>
                        
                    </div>
                </div>
            );
        };
export default MainPage;