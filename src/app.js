console.log('App.js is running!');

const app = {
    title: 'React Learning',
    subtitile: 'put your text',
    options: []
}

// JSX - JavaScript XML
// 1. Create render function that renders the new jsx
// 2. Call it right away
// 3. Call it after options array added to

const onSubmitForm = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

// Create "Remove All" button above list
// on click -> wipe the array -> rerender

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

// const numbers = [51,100,151];

const render = () => {
  const template = (
      <div>
          <h2>{app.title}</h2>
          {app.subtitile && <p>{app.subtitile}</p>}
          <p>{app.options.length > 0 ? 'Here are in your options' : 'No Options'}</p>
          <p>{app.options.length}</p>
          <button onClick={onRemoveAll}>Remove All</button>
          {
           /*numbers.map((number) => {
              return <p key={number}>Numbers: {number}</p>;
            })*/
          }
          <ol>
          {/* map over app.options getting back an array of list (set key and text)  */}
          {
            app.options.map((option) => <li key={option}>{option}</li>)
          }
          </ol>
          <form onSubmit={onSubmitForm}>
            <input type="text" name="option" />
            <button>Add Options</button>
          </form>
      </div>
  );
  
  ReactDOM.render(template, appRoot);
}

render();





