import React from 'react';

var StoryPanel = function(props) {
  return (
    <div className='story-panel'>
      <p className='story-title'>{props.story.title} </p>
      <p className='author-score'> <b>Author:</b> {props.story.author},   <b>Score:</b> {props.story.score} </p>
    </div>
  );
};

export default StoryPanel;
