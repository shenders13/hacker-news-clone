import React from 'react';

var StoryPanel = function(props) {
  return (
    <div>
      <hr/>
      <p> <b>Title:</b> {props.story.title} </p>
      <p> <b>Author:</b> {props.story.author} </p>
      <p> <b>Score:</b> {props.story.score} </p>
    </div>
  );
};

export default StoryPanel;
