import { Octokit } from "@octokit/core";
import axios from "axios";
const octokit = new Octokit();
export const searchOnGit = async (setIsLoading,setSearchDirty,setSearchedValue,setSearchResultError,setRepos,searchQuery,userId) => {
    
    try {
        setIsLoading(true);
        setSearchDirty(true);
        await octokit.request(`GET /users/${searchQuery}`)
            .then(res => {
                setSearchedValue(res.data);
            })
            .then(() => setSearchResultError(false));
        await octokit.request(`GET /users/${searchQuery}/repos`)
            .then(res => setRepos(res.data))
            .then(() => setIsLoading(false));
            console.log(searchQuery);
        await axios.post('http://localhost:4000/api/recent/add', { userId, searchedLogin: searchQuery });
    }
    catch (e) {
        console.log(e);
        setSearchResultError(true);
        setIsLoading(false)
    }
}