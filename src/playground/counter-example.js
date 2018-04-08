// Events and Attributes & Manual Data Binding

// 1. Make button "+1" - setup addOne function and register - log "addOne".
// 2. Make button "-1" - setup minusOne function and register - log "minusOne".
// 3. Make reset button "reset" - setup reset function - log "reset"

let count = 0;

const addOne = () => {
  // Add 1 from count - rerender
  count++;
  renderCounterApp();
};


const minusOne = () => {
  // Subtract 1 from count - rerender
  count--;
  renderCounterApp();
};


const reset = () => {
  // Set count to 0 a rerender
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
