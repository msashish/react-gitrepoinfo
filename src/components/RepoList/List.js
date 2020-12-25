import React from "react";

let List = (props) => {
    const {repos} = props;
    if (!repos ||  repos.length === 0) return <p>Nothing to list as of now....</p>
    return (
        <ul>
            <h2>Available public git repositories</h2>
            {
                repos.map((repo) => {
                    return (
                        <li key={repo.id} className='list'>
                            <span className='repo-text'>Name: {repo.name} </span>
                            <span className='repo-description'>Description: {repo.description}</span>
                        </li>
                        );
                    }
                )
            }
        </ul>
    );
}

export default List;