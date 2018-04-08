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

// Events and Attributes
var count = 0;

var addOne = function addOne() {
  console.log('add one');
};

var minusOne = function minusOne() {
  console.log('minus one');
};

var reset = function reset() {
  console.log('rest');
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
