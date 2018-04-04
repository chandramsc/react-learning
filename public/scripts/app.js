'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'React Learning :'
    ),
    React.createElement(
        'p',
        null,
        'This is JSX from app.js chandra!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Link One'
        ),
        React.createElement(
            'li',
            null,
            'Link Two'
        )
    )
);

// create user object name/age/location
// use name/age/location in the template
// render template

var user = {
    name: 'chandra',
    age: 27,
    location: 'pollachi'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
