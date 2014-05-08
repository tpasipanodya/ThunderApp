// Tests for use cases at the notes route
var notes = require('../../models/notes');
var zombie = require('zombie');
var browser = new zombie();

// Empty the database
exports['setup'] = function(test) {
    notes.deleteAll(function() {
        test.done();
    });
};


exports['log in (success)'] = function(test) {
    test.expect(2);
    console.log('hello');
    browser.visit('http://localhost:8082/', function() {
        test.ok(browser.query('#login'));
        console.log('hey');
        browser.
            fill('#login_name', 'Kayla').
            fill('#login_password', 'hello').
            pressButton('#login_submit', function() {
                test.ok(browser.query('#logout'));
                    console.log('whats up?');

                    test.done();
            });
    });
}

exports['make an event'] = function(test) {
    test.expect(2);
    
    browser.visit('http://localhost:8082/addEvent', function() {
        test.ok(browser.query('#addEvent'));
        
        browser.
        fill('#name', 'class').
        fill('#date', '05/17/2014').
        fill('#time', '1000').
        fill('#location', 'dana').
        pressButton('#event_add', function() {
            test.ok(browser.query('#logout'));
            test.done();
        });
    });
}

// Empty the database and close the connection
exports['cleanup'] = function(test) {
    notes.deleteAll(function() {
        notes.close(function() {
            test.done();
        });
    });
};