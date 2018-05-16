const express = require('express');
const request = require('request');



app.get('/', (req, res ) => {
    res.render('homepage');
});

/*
passport.use(new LocalStrategy((login,id,avatar_url,
    html_url,name,company,blog,location,email,
    bio,public_repos,followers,following))=> {
    user
    .findOne({})
}
*/