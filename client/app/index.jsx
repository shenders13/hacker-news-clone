import React from 'react';
import ReactDOM from 'react-dom';
import StoryList from './storyList.jsx';
import $ from 'jquery';
import ajaxHelpers from './ajaxHelpers.js';
import App from './App.jsx';
import Author from './authorInfo.jsx'
import { Route, Router, hashHistory, IndexRedirect} from 'react-router';
import Hero from './Hero.jsx';


ajaxHelpers.fetchStories(function(topTenList) {
  ajaxHelpers.fetchAuthors(function(authors) {
    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path='/' component={Hero}>
          <IndexRedirect to="/stories" />
          <Route path='/stories' component={App} stories={topTenList} authors={authors} />
          <Route path='author/:userName/:karma/:numSubmissions' component={Author}/>
        </Route>
      </Router>
      , document.getElementById('app')
    );
  });
});


// ReactDOM.render(<App stories={topTenList}/>, document.getElementById('app'));
