import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

var fetchStories = function(callback) {
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

var fetchAuthors = function(callback) {
  $.ajax({
    url: '/authors',
    type: 'GET',
    success: function(authors) {
      callback(authors);
    },
    error: function(err) {
      console.error(err);
    }
  }); 
};

var ajaxHelpers = {
                    fetchStories: fetchStories,
                    fetchAuthors: fetchAuthors
                  }

export default ajaxHelpers;
