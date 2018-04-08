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

// Events and Attributes & Manual Data Binding

// 1. Make button "+1" - setup addOne function and register - log "addOne".
// 2. Make button "-1" - setup minusOne function and register - log "minusOne".
// 3. Make reset button "reset" - setup reset function - log "reset"

var count = 0;

var addOne = function addOne() {
  // Add 1 from count - rerender
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  // Subtract 1 from count - rerender
  count--;
  renderCounterApp();
};

var reset = function reset() {
  // Set count to 0 a rerender
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
