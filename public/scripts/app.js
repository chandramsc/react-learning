'use strict';

console.log('App.js is running!');

var app = {
  title: 'React Learning',
  subtitile: 'put your text',
  options: []

  // JSX - JavaScript XML
  // 1. Create render function that renders the new jsx
  // 2. Call it right away
  // 3. Call it after options array added to

};var onSubmitForm = function onSubmitForm(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

// Create "Remove All" button above list
// on click -> wipe the array -> rerender

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  // console.log(randomNum);
};

var appRoot = document.getElementById('app');

// const numbers = [51,100,151];

var render = function render() {
  var template = React.createElement(
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should i do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onSubmitForm },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Options'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
