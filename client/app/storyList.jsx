import React from 'react';
import StoryPanel from './storyPanel.jsx';

var StoryList = function(props) {
  return (
    <div>
      {props.storyList.map((story, i) =>
        <StoryPanel story={story} key={i}/>
      )}
      <hr/>
    </div>
  );
};

export default StoryList;

