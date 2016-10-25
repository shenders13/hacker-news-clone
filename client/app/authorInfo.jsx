import React from 'react';

var authorInfo = function(props) {
  return(
    <div>
    <h1> author info </h1>
    <p><b>username:</b>{props.params.userName}</p>
    <p><b>karma:</b>{props.params.karma}</p>
    <p><b>number of submissions:</b>{props.params.numSubmissions}</p>
    </div>
  );
};

export default authorInfo;