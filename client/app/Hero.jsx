import React from 'react';

class Hero extends React.Component {
  render () {
    return (
      <div>
        <img className='bg-image' src='http://res.cloudinary.com/small-change/image/upload/v1477211672/hrbg_1_akcnyf.png'/>
        {this.props.children}
      </div>
    )
  }
};

export default Hero;