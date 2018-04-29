class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>What should I do?</div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    return(
      <div>Option Componets here</div>
    );
  }
}

// AddOption -> AddOption component here
class AddOption extends React.Component {
  render() {
    return (
      <div>AddOption component here</div>
    );
  }
}

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
