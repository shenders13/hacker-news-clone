import React from 'react';

var authorInfo = function(props) {
  return(
    <div className='author-panel'>
      <div className='col-xs-4'>
      <center>
        <br/>
        <br/>
        <p className='submissions-text'>{props.params.userName}</p>
        <img src='https://openclipart.org/download/247319/abstract-user-flat-3.svg' className='author-panel-user-icon' />
      </center>
      </div>
      <div className='col-xs-4'>
      <center>
        <img src='http://image.flaticon.com/icons/svg/32/32214.svg' className='author-panel-karma-icon' />
        <p className='author-panel-stat'>{props.params.karma}</p>
        <p className='karma-text'>karma</p>
      </center>
      </div>
      <div className='col-xs-4'>
      <center>
        <img src='https://cdn0.iconfinder.com/data/icons/seo-and-internet-marketing-set-1/100/Directory_Submission-512.png' className='author-panel-submissions-icon' />
        <p className='author-panel-stat'>{props.params.numSubmissions}</p>
        <p className='karma-text'>submissions</p>
      </center>
      </div>
    </div>
  );
};

export default authorInfo;