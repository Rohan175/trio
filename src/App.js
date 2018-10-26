import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './Home';
import Search from "./Search";
import Blog from "./Blog";

class App extends Component {

    setRef = (name, value) => {
        this[name] = value
    }

    render() {
        return (
            <React.Fragment>
                <NavBar scrollRef={this} />
                <Switch>
                    <Route exact path="/" component={() => (<Home setRef={this.setRef} />)} />
                    <Route path="/Search" component={(locationProps) => (<Search {...locationProps.location.state}/>)} />
                    <Route exact path="/Blog" component={() => (<Blog />)} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
