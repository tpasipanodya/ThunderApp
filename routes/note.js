// Note page: Create, edit, save, view, or delete notes

var users = require('../models/users');
var validator = require('validator');

// Note page: Show Note menu

module.exports = function(request,response) {
    var username = request.session.username;
    
    // If logged in, go to addNote
    if (username) {
        response.render('note', {username:username});
    }
    
    // Sends to another route
    else {
        response.redirect('/');
    }
};