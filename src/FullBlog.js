
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';

const styles = theme => ({
    layout: {
        width: 'auto',
        paddingTop: '100px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
        padding: '20px'
    },
    image: {
        width: '100%'
    }
    // mainGrid: {
    //     display: 'flex'
    // },
    // mainPost: {
    //     display: 'flex',
    //     alignContent: 'stretch'
    // },
    // secondGrid: {
    //     display: 'flex',
    //     alignContent: 'stretch'
    // }
  });



class FullBlog extends Component {

    state = {
        openBlog: false,
        blogTitle: "",
        blogDate: "",
        blogContent: ""
    }

    handleOpen = () => {
        this.setState({
            openBlog: true
        })
    }

    handleClose = () => {
        this.setState({
            openBlog: false
        })
    }

    handlePost = post => {
        this.setState({
            openBlog: true,
            blogTitle: post.title,
            blogDate: post.date,
            blogContent: post.content
        })
    }

    render() {

        let { classes } = this.props;
        let { featuredPosts } = this.props;
        let currPost = featuredPosts[this.props.match.params.id];
        
        if(!currPost) {
            return (
                <Redirect to="/Blog" />
            )
        }
        
        return (
            <div className={classes.layout}>
                <Typography variant="h4">{currPost.title}</Typography>
                <br />
                <Divider />
                <br />
                <Typography variant="title">{currPost.description}</Typography>
                <br />
                <Typography variant="caption">{currPost.date}</Typography>
                <br />
                <div dangerouslySetInnerHTML={{ __html: currPost.content }}>
                    
                </div>
            </div>
        );
    }
}

FullBlog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullBlog);

