import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var getAllStories = function(callback) {
  $.ajax({
    url: '/stories',
    type: 'GET',
    success: function(topTenList) {
      callback(topTenList);
    },
    error: function(err) {
      console.error(err);
    }
  }); 
};

export default getAllStories;
