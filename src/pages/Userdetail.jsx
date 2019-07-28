import React, { useEffect, useContext } from "react";
import GithubContext from "../context/GithubContext";
import Loading from "../components/Loading";
import Repos from "../components/Repos";
import { Link } from "react-router-dom";
const Userdetail = props => {
  const githubContext = useContext(GithubContext);
  const userName = props.match.params.username;

  useEffect(() => {
    githubContext.getUserdetail(userName);
    githubContext.getUserRepos(userName);
    // eslint-disable-next-line
  }, []);

  const { login, avatar_url, bio, company, location } = githubContext.user;

  if (githubContext.isLoading) {
    return (
      <div className='userdetail_container container'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='userdetail_container container'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={avatar_url} alt={login} className='rounded-circle' />
          <div className='text-center mt-2'>
            <Link to='/' className='btn btn-danger'>
              Go Back
            </Link>
          </div>
        </div>

        <div className='col-md-9'>
          {login && (
            <h2 className='userdetail_user_login'>
              {login.charAt(0).toUpperCase() + login.slice(1)}
            </h2>
          )}
          {bio && <div className='userdetail_bio mt-2'>{bio}</div>}
          {company && (
            <div className='userdetail_company_name mt-2'>
              Company: {company}
            </div>
          )}
          {location && (
            <div className='userdetail_location mt-2'>Location: {location}</div>
          )}
        </div>
      </div>

      <div className='repos_container'>
        <Repos />
      </div>
    </div>
  );
};

export default Userdetail;
