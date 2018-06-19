import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <h1>Header</h1>
            {props.children}
            <p>This is my content</p>
        </div>
    );
};

ReactDOM.render(<Layout><p>chandra</p></Layout>, document.getElementById('app'));

