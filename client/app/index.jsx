import React from 'react';
import ReactDOM from 'react-dom';
import StoryList from './storyList.jsx';
import $ from 'jquery';
import fetchStories from './ajaxHelpers.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storyList: props.stories
    };
  }

  render () {
    return (
      <div>
        <img className='bg-image' src='http://res.cloudinary.com/small-change/image/upload/v1477211672/hrbg_1_akcnyf.png'/>
        <StoryList storyList={this.state.storyList}/>
      </div>
    )
  }
};

fetchStories(function(topTenList) {
  ReactDOM.render(<App stories={topTenList}/>, document.getElementById('app'));
});


