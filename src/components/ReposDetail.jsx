import React from "react";

const ReposDetail = props => {
  const { repo } = props;
  return (
    <div>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default ReposDetail;
