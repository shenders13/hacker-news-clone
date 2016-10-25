import React from 'react';
import StoryList from './storyList.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storyList: props.route.stories,
      authorList: props.route.authors
    };
  }

  render () {
    return (
      <div>
        <StoryList storyList={this.state.storyList} authorList={this.state.authorList}/>
      </div>
    )
  }
};

export default App;