console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h2>React Learning :</h2>
        <p>This is JSX from app.js chandra!</p>
        <ol>
            <li>Link One</li>
            <li>Link Two</li>
        </ol>
    </div>
);

// create user object name/age/location
// use name/age/location in the template
// render template

var user = {
    name : 'chandra',
    age : 27,
    location : 'pollachi'
};

var templateTwo = (
    <div>
        <h2>{user.name}</h2>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
