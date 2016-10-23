import React from 'react';
import ReactDOM from 'react-dom';
import StoryList from './storyList.jsx';

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
        <h1> Hacker News Stories </h1>
        <StoryList storyList={this.state.storyList}/>
      </div>
    )
  }
}

ReactDOM.render(<App stories={topTenList}/>, document.getElementById('app'));