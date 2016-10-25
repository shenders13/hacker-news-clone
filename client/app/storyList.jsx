import React from 'react';
import StoryPanel from './storyPanel.jsx';

var StoryList = function(props) {
  return (
    <div>
      {props.storyList.map((story, i) =>
        <StoryPanel story={story} key={i} authorList={props.authorList}/>
      )}
    </div>
  );
};

export default StoryList;

