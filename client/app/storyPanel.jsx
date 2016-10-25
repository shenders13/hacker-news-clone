import React from 'react';
import { Link } from 'react-router'
import URL from 'url-parse'

var StoryPanel = function(props) {
  var thisAuthor = props.story.author;
  var urlObject = new URL(props.story.url);
  var authorList = props.authorList;

  for (var i = 0; i < authorList.length; i++) {
    if (authorList[i].username === thisAuthor) {
      var authorObject = authorList[i];
    }
  }

  var karma = authorObject.karma;
  var numSubmissions = authorObject.numSubmissions;
  var authorLink = '/author/' + thisAuthor + '/' + karma.toString() + '/' + numSubmissions.toString();

  return (
    <div className='story-panel'>
      <div className='col-xs-12'>
        <p className='story-title'><a className='url-links' href={props.story.url}>{props.story.title}</a> </p>
      </div>
      <div className='col-xs-12'>
        <p className='author-score'> 
          <img className='userIcon' src='https://openclipart.org/download/247320/abstract-user-flat-4.svg' />
          <span className='author-link'><Link to={authorLink}>{props.story.author}</Link></span>,
        </p>
      </div>
      <div className='col-xs-2'>
        <p className='score-line'>
          <img className='scoreIcon' src='http://image.flaticon.com/icons/png/512/32/32214.png' />
          {props.story.score}
        </p>
      </div>
      <div className='col-xs-10'>
        <p className='url-line'>
          <img className='scoreIcon' src='http://icons.iconarchive.com/icons/icons8/ios7/512/Maps-Globe-Filled-icon.png' />
          {urlObject.origin}
        </p>
      </div>
    </div>
  );
};

export default StoryPanel;
