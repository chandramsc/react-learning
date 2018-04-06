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

// create user object name/age/location
// use name/age/location in the template
// render template

const user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    {<h4>Hello</h4>}
  </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
