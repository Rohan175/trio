import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../images/logo.gif';

const styles = (theme) => ({
    appBar: {
        paddingTop: '5px',
        paddingBottom: '5px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
        background: "linear-gradient(to right, #006972 0%,#008080 100%,#008080 100%)"
    },
    toolbar: {
        justifyContent: 'space-between',
    },
    navBarMenuDesktop: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
        color: 'white'
    },
    mobileMenuIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    menuButton: {
        color: 'white'
    }
})

let navItems = [
    {
        name: "Search",
        ref: "search",
        path: "/Search"
    },
    {
        name: "About",
        ref: "about",
        path: "/About"
    },
    {
        name: "Contact",
        ref: "contact",
        path: "/Contact"
    },{
        name: "Blog",
        ref: "blog",
        path: "/Blog"
    }
]


class NavBar extends Component {

    state = {
        Drawer: false
    }

    preOpen = () => {
        window.location.hash = "/";
    }

    offDrawer = () => {
        this.setState({
            Drawer: false
        })
    }

    onDrawer = () => {
        this.setState({
            Drawer: true
        })
    }

    render() {

    let { classes } = this.props;
    let { scrollRef } = this.props;

    return (
        <AppBar color="default" className={classes.appBar}>
            <Drawer anchor="top" open={this.state.Drawer} onClose={this.offDrawer}>
                <List>
                <ListItem color="default" className={classes.menuButton} component={NavLink} onClick={this.offDrawer} to="/Search">
                        <ListItemText>
                            {navItems[0].name}
                        </ListItemText>
                    </ListItem>
                    <ListItem color="default" className={classes.menuButton} onClick={async () => { this.offDrawer(); window.location.hash = "/"; scrollToComponent(scrollRef.trioIntroBlock, { offset: 0, align: 'top', duration: 1500})} }>
                        <ListItemText>
                            {navItems[1].name}
                        </ListItemText>
                    </ListItem>
                    <ListItem color="default" className={classes.menuButton} onClick={async () => { this.offDrawer(); window.location.hash = "/"; scrollToComponent(scrollRef.contactBlock, { offset: 0, align: 'top', duration: 1500})} }>
                        <ListItemText>
                            {navItems[2].name}
                        </ListItemText>
                    </ListItem>
                    <ListItem color="default" className={classes.menuButton} component={NavLink} onClick={this.offDrawer} to="/Blog">
                        <ListItemText>
                            {navItems[3].name}
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <Toolbar className={classes.toolbar} variant="dense">
                <div onClick={() => { 
                    window.location.hash = "/";
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;    
                }} style={{cursor: 'pointer'}}>
                    <Grid container>
                        <Grid item xs>
                            <img alt="logo" src={Logo} style={{width: '50px', height: '50px'}} />
                        </Grid>
                        <Grid item xs>
                            <div style={{width: '100px', borderLeft: '1px solid black', paddingLeft: '10px', marginLeft: '10px', marginTop: '7px '}}>
                                <Typography style={{color: 'white'}}>Trio</Typography>
                                <Typography variant="caption" style={{color: 'white'}}>Break the chain</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.navBarMenu}>
                    <div className={classes.navBarMenuDesktop}>
                    <Button color="default" className={classes.menuButton} component={NavLink} to="/Search">
                            {navItems[0].name}
                        </Button>
                        <Button color="default" className={classes.menuButton} onClick={() => { window.location.hash = "/"; scrollToComponent(scrollRef.trioIntroBlock, { offset: 0, align: 'top', duration: 1500})} }>
                            {navItems[1].name}
                        </Button>
                        <Button color="default" className={classes.menuButton} onClick={() => { window.location.hash = "/"; scrollToComponent(scrollRef.contactBlock, { offset: 0, align: 'top', duration: 1500})} }>
                            {navItems[2].name}
                        </Button>
                        <Button color="default" className={classes.menuButton} component={NavLink} to="/Blog">
                            {navItems[3].name}
                        </Button>
                    </div>
                    <IconButton className={classes.mobileMenuIcon} onClick={this.onDrawer}>
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
