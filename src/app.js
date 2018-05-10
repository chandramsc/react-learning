class IndecisionApp extends React.Component {
  render() {

    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ['Thing one', 'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <Option />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("pickup");
  }
  render() {
    return (
      <button onClick={this.handlePick}>What should I do?</button>
    );
  }
}


// Setup Options prop for Options component
// Render the length of the array
// Render new p tag for each option (set text, set key)

class Options extends React.Component {
  handleRemoveAll() {
    alert('remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          // this.props.options.length
          // this.props.options.map((option) => <p key={option}>{option}</p>) 
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
