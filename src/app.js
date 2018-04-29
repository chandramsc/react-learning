class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <Option />
        <AddOption />
      </div>
    );
  }
}

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
      <button>What should I do?</button>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    return (
      <div>Options Componets here</div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option component here
      </div>
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



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
