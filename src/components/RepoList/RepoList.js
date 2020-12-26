import React, {useState, useEffect} from "react";
import api from "../../api-client/api";
import List from "../RepoList/List";
import WithComponentLoading from "../RepoList/withComponentLoading";



function RepoList({repo}){
    const ListLoading = WithComponentLoading(List);
    const [repoState, setRepoState] = useState({
        loading: false,
        repos: null,
    });


    // useEffect function expects 2 parameters input (1) expression function (2) a list of functions as input
    // useEffect is automatically called after render or after modifications
    useEffect(() => {
        console.log("repo passed is", repo)
        setRepoState({loading: true})
        api.getRepoList(repo)
            .then((repos) => {
                const allRepos = repos.data;
                setRepoState({loading: false, repos: allRepos});
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    console.log(err.response.status)
                } else if (err.request) {
                    // client never received a response, or request never left
                    console.log(err.request.status)
                } else {
                    // anything else
                    console.log(err)
                }
                setRepoState({loading: false, repos: ""});
            })
        ;
        }, [repo, setRepoState]
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