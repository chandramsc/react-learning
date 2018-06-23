import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
    <div>
        404! <Link to="/">Go Home</Link> 
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact="true">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddDashboardPage} />
                <Route path="/edit" component={EditDashboardPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

