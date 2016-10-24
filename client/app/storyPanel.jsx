import React from 'react';

var StoryPanel = function(props) {
  return (
    <div className='story-panel'>
      <p className='story-title'><a className='url-links' href={props.story.url}>{props.story.title}</a> </p>
      <p className='author-score'> <b>Author:</b> {props.story.author},   <b>Score:</b> {props.story.score} </p>
    </div>
  );
};

export default StoryPanel;
