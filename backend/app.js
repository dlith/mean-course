const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next)=> {
  const posts = [
    {
      id: 'fad123123',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'wqfreg123',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched seccesfully!',
    posts: posts
  });
});

module.exports = app;
