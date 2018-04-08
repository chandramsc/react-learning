console.log('App.js is running!');

const app = {
    title: 'React Learning',
    subtitile: 'put your text',
    options: ['one','two']
}

// JSX - JavaScript XML
const template = (
    <div>
        <h2>{app.title}</h2>
        {app.subtitile && <p>{app.subtitile}</p>}
        <p>{app.options.length > 0 ? 'Here are in your options' : 'No Options'}</p>
        <ol>
            <li>Link One</li>
            <li>Link Two</li>
        </ol>
    </div>
);


// Events and Attributes
let count = 0;

const addOne = () => {
  console.log('add one');
};

const minusOne = () => {
  console.log('minus one');
};

const reset = () => {
  console.log('rest');
};

const templateTwo = (
  <div>
    <h1>Count {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
