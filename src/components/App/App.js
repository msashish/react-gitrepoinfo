import React, {useState} from "react";
import DisplayName from '../DisplayName/DisplayName'
import RepoList from "../RepoList/RepoList";

function App() {
    const [input, setInput] = useState("msashish");
    const [repo, setRepo] = useState("msashish");

    const handleSubmit = e => {
        e.preventDefault();
        setRepo(input);
    }

    return (
        <>
            <React.StrictMode>
                <DisplayName />
                <form onSubmit={handleSubmit}>
                    <label>Enter git repo-user name </label>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </form>
                <RepoList repo={repo}/>
            </React.StrictMode>,
        </>
    );

}
export default App;