import React, { useContext, Fragment } from "react";
import Loading from "./Loading";
import UserItem from "../components/UserItem";
import GithubContext from "../context/GithubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users } = githubContext;
  return (
    <Fragment>
      <Loading />
      <div className='row user_container'>
        {users.length > 0 &&
          users.map((user, i) => <UserItem user={user} key={i} />)}

        {users.length === 0 && githubContext.isSearch === true && (
          <div className='col-md-12 alert alert-danger notfound text-center'>
            {" "}
            No user found
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Users;
