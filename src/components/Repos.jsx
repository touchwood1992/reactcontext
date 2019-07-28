import React, { useContext } from "react";
import GithubContext from "../context/GithubContext";
import ReposDetail from "./ReposDetail";
import Loading from "./Loading";
const Repos = () => {
  const githubContext = useContext(GithubContext);
  const allRepos = githubContext.repos;
  if (githubContext.repos.length === 0) {
    return "";
  }

  if (githubContext.isLoading) {
    return <Loading />;
  }
  return allRepos.map((repo, i) => (
    <div className='repo_detail_container' key={i}>
      <ReposDetail repo={repo} />
    </div>
  ));
};

export default Repos;
