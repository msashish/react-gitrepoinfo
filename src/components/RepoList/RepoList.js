import React, {useState, useEffect} from "react";
import api from "../../api-client/api";
import List from "../RepoList/List";
import WithComponentLoading from "../RepoList/withComponentLoading";

function RepoList(){
    const ListLoading = WithComponentLoading(List);
    const [repoState, setRepoState] = useState({
        loading: false,
        repos: null,
    });

    // useEffect function expects 2 parameters input (1) expression function (2) a list of functions as input
    // useEffect is automatically called after render or after modifications
    useEffect(() => {
        setRepoState({loading: true})
        api.getRepoList()
            .then((repos) => {
                const allRepos = repos.data;
                setRepoState({loading: false, repos: allRepos});
            });
        }, [setRepoState]
    )
    return (
        <div>
            <div className='repo-container'>
                <ListLoading isLoading={repoState.loading} repos={repoState.repos} />
            </div>
        </div>
    );
}

export default RepoList;