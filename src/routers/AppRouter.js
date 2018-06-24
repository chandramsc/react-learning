import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddDashboardPage from '../components/AddDashboardPage';
import EditDashboardPage from '../components/EditDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFountPage from '../components/NotFountPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddDashboardPage} />
                <Route path="/edit/:id" component={EditDashboardPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFountPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;