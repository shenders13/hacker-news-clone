import React from 'react';
import {Link} from 'react-router'

class Hero extends React.Component {
  render () {
    return (
      <div>
        <img className='bg-image' src='http://res.cloudinary.com/small-change/image/upload/v1477211672/hrbg_1_akcnyf.png'/>
        <div className='col-xs-12'>
          <span className='btn btn-default btn-sm nav-button-far-left'><Link to='/'>Home</Link></span>
          <a className='btn btn-default btn-sm nav-buttons' href='http://samhenderson.xyz/'> About Maker</a>
          <a className='btn btn-default btn-sm nav-buttons' href='https://github.com/shenders13/hacker-news-clone'>This Repo</a>
          <a className='btn btn-default btn-sm nav-buttons' href='https://news.ycombinator.com/'>The Real Hacker News</a>
        </div>
        {this.props.children}
      </div>
    )
  }
};

export default Hero;