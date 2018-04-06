'use strict';

console.log('App.js is running!');

var app = {
  title: 'React Learning',
  subtitile: 'put your text',
  options: ['one', 'two']

  // JSX - JavaScript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    app.title
  ),
  app.subtitile && React.createElement(
    'p',
    null,
    app.subtitile
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are in your options' : 'No Options'
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
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location),
  React.createElement(
    'h4',
    null,
    'Hello'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
