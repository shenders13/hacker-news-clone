import React from 'react';
import { Link } from 'react-router'

var StoryPanel = function(props) {
  var thisAuthor = props.story.author;
  var authorList = props.authorList;

  for (var i = 0; i < authorList.length; i++) {
    if (authorList[i].username === thisAuthor) {
      var authorObject = authorList[i];
      console.log('authorObject in loop: ', authorObject)
    }
  }
  console.log('authorObject AFTER loop: ', authorObject)
  var karma = authorObject.karma;
  var numSubmissions = authorObject.numSubmissions;
  var authorLink = '/author/' + thisAuthor + '/' + karma.toString() + '/' + numSubmissions.toString();

  return (
    <div className='story-panel'>
      <p className='story-title'><a className='url-links' href={props.story.url}>{props.story.title}</a> </p>
      <p className='author-score'> <b>Author:</b> <Link to={authorLink}>{props.story.author}</Link>,   <b>Score:</b> {props.story.score} </p>
    </div>
  );
};

export default StoryPanel;
