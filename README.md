# Hacker News with UI from this century

Here is a [live version](https://hackernewswithmodernui.herokuapp.com/#/stories?_k=9eq2f8) of this repo. 

## Stack

It is built using the MERN (MongoDB, Express JS, React JS, Node JS) stack.

## How it uses the Hacker News API

This app uses a five step process to use & store data from the [Hacker News API](https://github.com/HackerNews/API).

### Step 1: We pull ID's of the top 500 stories

Hitting the top 500 stories endpoint (https://hacker-news.firebaseio.com/v0/topstories.json) returns an array
of integers. Each integer is associated with a unique story on Hacker News.

For the actual code, see 'getStoriesData' in server/storyHelpers.js

### Step 2: Get the story object for each story ID.

We then hit the 'item' (what Hacker News calls it) endpoint (https://hacker-news.firebaseio.com/v0/item/<InsertIdHere>.json) for each story ID we
received in part one. My for loop is configured to only get the story objects of the top 10 stories but this theoretically could
increased to any integer less than 500.

### Step 3: Store each story object in the database using Mongoose

When we invoke the 'getStoriesData' function we pass in a callback function. The callback function will take the object returned from Step 2, and save it into the Mongo database using Mongoose.

### Step 4: Invoke steps 1-3 when a user (or you) navigates to '/update-stories'

Check out server/server.js

Using express routing, we can invoke everything in steps 1-3 whenever a user navigates to '/update-stories' using:

`app.get('/update-stories', storyHelpers.updateStories);`

Make sure you've required storyHelpers and have wrapped steps 1-3 in a function called updateStories. The names are useful but totally arbitrary.
