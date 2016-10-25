# Hacker News with UI from this century

This repo guide should give you some familiarity with how the Hacker News API works.

Here is a [live version](https://hackernewswithmodernui.herokuapp.com/#/stories?_k=9eq2f8) of this repo. 

To build the app you see above, we save the top 10 stories on Hacker News into our database. We then save
information about each of the authors into the database. Finally, we make the database refresh every 10 minutes.

I've written a step by step guide below.

NB: The guide is heavily focused on the back-end

## Stack

It is built using the MERN (MongoDB, Express JS, React JS, Node JS) stack.

## How it uses the Hacker News API

This app uses a six step process to use & store data from the [Hacker News API](https://github.com/HackerNews/API).

### Step 1: We pull ID's of the top 500 stories

Hitting the top 500 stories endpoint (https://hacker-news.firebaseio.com/v0/topstories.json) returns an array
of integers. Each integer is associated with a unique story on Hacker News.

For the actual code, see 'getStoriesData' in server/storyHelpers.js

### Step 2: Get the story object for each story ID.

We then hit the 'item' (what Hacker News calls it) endpoint (https://hacker-news.firebaseio.com/v0/item/<InsertIdHere>.json) for each story ID we
received in part one. My for loop is configured to only get the story objects of the top 10 stories but this theoretically could be increased to any integer less than 500.

### Step 3: Store each story object in the database using Mongoose

When we invoke the 'getStoriesData' (in server/storyHelpers.js) function we pass in a callback function. The callback function will take the  story object returned from Step 2, and save it into the Mongo database using Mongoose.

But before we start saving things to our database however, we delete all documents previously saved in our stories table. I did this because I wanted the DB to contain only the top stories, and not have stories saved that used to be 'top stories' but aren't anymore.

### Step 4: Invoke steps 1-3 when a user (or you) navigates to '/update-stories'

Check out server/server.js

Using express routing, we can invoke everything in steps 1-3 whenever a user navigates to '/update-stories' using:

`app.get('/update-stories', storyHelpers.updateStories);`

Make sure you've required storyHelpers and have wrapped steps 1-3 in a function called updateStories. The names are useful but totally arbitrary.

### Step 5: Fetch the authors of all the stories in our database

We are now up to server/authorHelpers.js

First step, we remove all author objects from the author table. Then we check our database for all saved STORY objects. Each story object has an author associated with it. 

We use each story's author to make an API call to the user
(https://hacker-news.firebaseio.com/v0/user/<InsertUsernameHere>.json
) endpoint. This returns the author object for the given story.

Like in Step 3, we then use a callback function to save the author objects into our database.


### Step 6: Refresh 

server/updateData.js

Using setInterval and the request library, we ping the '/update-stories' route and then the '/update-authors' route
every 10 minutes. This refreshes the database with the most up to date stories and authors.
