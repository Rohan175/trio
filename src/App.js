import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './Home';
import Search from "./searchContact";
import Contact from "./components/Contact";
import Blog from "./Blog";
import FullBlog from "./FullBlog";

const featuredPosts = [
    {
        id: 0,
        title: 'Featured post',
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        content: "<h1>Hi there!</h1>"
    },
    {
        id: 1,
        title: 'Post title',
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        content: "<h1>Hi there! this is html</h1>"
    },
];

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
                    <Route exact path="/Blog" component={() => (<Blog featuredPosts={featuredPosts} />)} />
                    <Route path="/Blog/:id" component={({match}) => (<FullBlog match={match} featuredPosts={featuredPosts} />)} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(App);
