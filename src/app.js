import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddDashboardPage = () => (
    <div>
        This is from my add dashboard component
    </div>
);

const EditDashboardPage = () => (
    <div>
        This is from my edit dashboard component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help dashboard component
    </div>
);

const NotFountPage = () => (
    <div>404!</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddDashboardPage} />
            <Route path="/edit" component={EditDashboardPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFountPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

