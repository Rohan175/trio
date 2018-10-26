import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import Toolbar from '@material-ui/core/Toolbar';
// import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

import TeacherImage from './images/training.svg';
import AboutUsImage from './images/about-us.svg';
import HomeImage from './images/house.svg';
import GroupImage from './images/group.svg';
import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Linkedin from './images/linkedin.svg';
import Youtube from './images/youtube.svg';
import Twitter from './images/twitter.svg';

import SearchBar from './components/SearchBar';

const styles = (theme) => ({
    root: {
        overflowX: 'hidden'
    },
    searchBlock: {
        paddingTop: '100px',
        display: 'flex',
        height: '550px',
        background: '#006972',
        // background: "linear-gradient(to left, #006972 0%,#008080 100%,#008080 100%)",
        // background: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        width: '100vw',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
            // height: '100vh',
            width: '100vw',
        },
    },
    trioIntroBlock: {
        textAlign: 'center',
        paddingTop: '160px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    trioTextBlock: {
        padding: '20px',
        height: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'left'
    },
    trioImageBlock: {
        padding: '20px',
        // height: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'center'
    },
    cardsBlock: {
        paddingTop: '60px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    cardsContainer: {
        [theme.breakpoints.up('md')]: {
            marginTop: '40px'
        },
        marginTop: '20px'
    },
    cardWrapper: {
        padding: '20px',
        height: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
    },
    cards: {
        margin: 'auto'
    },
    trioAboutBlock: {
        textAlign: 'center',
        paddingTop: '60px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    contactBlock: {
        paddingTop: '60px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    textField: {
        width: "100%"
    },
    Button: {
        width: "100%",
        background: "linear-gradient(to left, #006972 0%,#008080 100%,#008080 100%)",
        color: 'white'
    },
    footer: {
        paddingTop: '60px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    socialIcons: {
        width: "40px",
        padding: '10px'
    },
    content: {
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        },
        width: '70%'
    },
    searchBox: {
        padding: '10px',
        fontSize: '20px',
        [theme.breakpoints.up('md')]: {
            width: '100%'
        },
        textAlign: 'center',
        borderRadius: '4px',
        border: 'none'
    },
    navBarMenuDesktop: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    mobileMenuIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    skew: {
        width: '100%',
        height: '100px',
        position: 'absolute',
        left: '0px',
        background: 'linear-gradient(to right bottom, #006972 49%, #FFF 50%)'
    }
})


class Home extends Component {

    state = {
        email: "",
        description: ""
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentDidMount = () => {
        scrollToComponent(this.searchBlock, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
    }

    searchSubmit = e => {
        e.preventDefault();
    }

    render() {

        let { classes } = this.props;
        let { setRef } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.searchBlock} ref={(section) => { setRef('searchBlock', section); }}>
                    <div className={classes.content}>
                        <Typography variant="display1" style={{color: 'white', marginBottom : '75px'}}>SEARCH FOR TUTOR</Typography>
                        <SearchBar />
                    </div>  
                </div>
                <div className={classes.skew}></div>
                <div className={classes.trioIntroBlock} ref={(section) => { setRef('trioIntroBlock', section); }}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '20px'}}>
                            <Typography variant="display1">What is Trio?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item sm className={classes.trioImageBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <img alt="" src={TeacherImage} style={{width: '100%'}} />
                                    </div>
                                </Grid>
                                <Grid item sm className={classes.trioTextBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant="h6">Basically Trio is an institution <br />which provides good teachers to students, <br />Home tutions or Group tutions as per your choice.</Typography>
                                        <Typography variant="h6">With Trio there is no need to browse <br />through endless profiles, hassle and haggle.</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>  
                </div>
                <div className={classes.cardsBlock}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '30px'}}>
                            <Typography variant="display1">Tuitions On Demand</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div className={classes.cards}>
                                        <img alt="" src={HomeImage} style={{width: '100px'}} />
                                        <br /><br />
                                        <Typography variant="title">Home Tutions</Typography>
                                        <br />
                                        <Typography variant="body1">
                                            Get the best teaching experience at Home
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div className={classes.cards}>
                                        <img alt="" src={GroupImage} style={{width: '100px'}} />
                                        <br /><br />
                                        <Typography variant="title">Group Tutions</Typography>
                                        <br />
                                        <Typography variant="body1">
                                            Group Tution servies in all over city
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid> 
                </div>
                <div className={classes.trioAboutBlock} ref={(section) => { setRef('trioAboutBlock', section); }}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '20px'}}>
                            <Typography variant="display1">About Us</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item sm className={classes.trioImageBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <img alt="" src={AboutUsImage} style={{width: '100%'}} />
                                    </div>
                                </Grid>
                                <Grid item sm className={classes.trioTextBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant="h6">Basically Trio is an institution <br />which provides good teachers to students, <br />Home tutions or Group tutions as per your choice.</Typography>
                                        <Typography variant="h6">With Trio there is no need to browse <br />through endless profiles, hassle and haggle.</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>  
                </div>
                <div className={classes.contactBlock} ref={(section) => { setRef('contactBlock', section); }}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '30px'}}>
                            <Typography variant="display1">Contact Us</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div className={classes.cards} style={{textAlign: 'left', width: '300px'}}>
                                        <Typography variant="title">Trio Teachers</Typography>
                                        <br />
                                        <Typography variant="body1">
                                            202, <br />Sahajanand Complex, <br />Near Unique Group Tution, <br />New C. G. Road, <br />Chandkheda, <br />Ahmedabad 382424
                                        </Typography>
                                        <br />
                                        <Typography variant="body1">
                                            8487999309
                                        </Typography>
                                        <Typography variant="body1">
                                            trio.education.100@gmail.com
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div className={classes.cards}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            className={classes.textField}
                                            value={this.state.email}
                                            onChange={this.handleChange('email')}
                                            margin="normal" />

                                        <TextField
                                            id="desc"
                                            label="Description"
                                            multiline
                                            rows="4"
                                            className={classes.textField}
                                            value={this.state.description}
                                            onChange={this.handleChange('description')}
                                            margin="normal" />
                                        <br /><br />
                                        <Button variant="raised" className={classes.Button}>Send</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.footer}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '30px'}}>
                            <a href="http://google.com" target="blank"><img alt="" src={Facebook} className={classes.socialIcons} /></a>
                            <a href="https://twitter.com/TeachersTrio?s=08" target="blank"><img alt="" src={Twitter} className={classes.socialIcons} /></a>
                            <a href="https://www.instagram.com/p/BpUO8m4Beqc/?utm_source=ig_share_sheet&igshid=95t9iwk79hei" target="blank"><img alt="" src={Instagram} className={classes.socialIcons} /></a>
                            <a href="http://google.com" target="blank"><img alt="" src={Youtube} className={classes.socialIcons} /></a>
                            <a href="http://google.com" target="blank"><img alt="" src={Linkedin} className={classes.socialIcons} /></a>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
