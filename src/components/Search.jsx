import React, { useState, useContext } from "react";
import alertContext from "../context/alertContext";
import GithubContext from "../context/GithubContext";
const Search = () => {
  const AlertContext = useContext(alertContext);
  const githubContext = useContext(GithubContext);

  const [username, setUsername] = useState("");
  const setValue = e => {
    setUsername(e.target.value);
  };
  const searchNow = e => {
    e.preventDefault();

    if (username === "") {
      AlertContext.setAlert();
    } else {
      AlertContext.removeAlert();
      githubContext.serchUsers(username);
    }
  };
  const resetUsers = () => {
    setUsername("");
    githubContext.resetUsers();
    githubContext.getAllusers();
  };

  return (
    <div className='search_container'>
      <form onSubmit={searchNow}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            value={username}
            placeholder='Enter Username'
            onChange={setValue}
          />
        </div>
        <div className='buttons_container'>
          <button className='btn btn-secondary'>Search Now</button>

          {githubContext.isSearch === true && githubContext.users.length > 0 && (
            <button className='btn btn-secondary resetbtn' onClick={resetUsers}>
              Clear Users
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
