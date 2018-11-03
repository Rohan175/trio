import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import EmailIcon from '@material-ui/icons/Email/';
import PhoneIcon from '@material-ui/icons/LocalPhone/';
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

import TeacherImage from './images/working.svg';
// import AboutUsImage from './images/about-us.svg';
import HomeImage from './images/house.svg';
import GroupImage from './images/networking.svg';

import Premium from './images/premium.svg';
import Repeat from './images/repeat.svg';
import Chat from './images/chat.svg';
import Bicycle from './images/bicycle.svg';

import AboutUsImage from './images/students.svg'

import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Linkedin from './images/linkedin.svg';
import Youtube from './images/youtube.svg';
import Twitter from './images/twitter.svg';

// import {  } from "./images/";

import SearchBar from './components/SearchBar';
import Contact from './components/Contact';
import ThankYou from './components/thankYou';

const styles = (theme) => ({
    root: {
        overflowX: 'hidden'
    },
    searchBlock: {
        paddingTop: '75px',
        paddingBottom:  '70px',
        display: 'flex',
        height: '400px',
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
            paddingBottom: '0px'
        },
    },
    trioIntroBlock: {
        textAlign: 'center',
        paddingTop: '90px',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px'
        },
    },
    pageGrid: {
        alignItems: 'stretch',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
    },
    trioTextBlock: {
        padding: '20px',
        // height: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'left',
        order: 2,
        [theme.breakpoints.up('sm')]: {
            order: 1,
        },
    },
    trioImageBlock: {
        padding: '20px',
        // height: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        order: 1,
        [theme.breakpoints.up('sm')]: {
            order: 2,
        },
    },
    cardsBlock: {
        // background: '#006972',
        paddingTop: '60px',
        paddingBottom: '0px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
            paddingBottom: '0px'
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
        // minHeight: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'center'
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
        width: "100%",
        // marginTop: '10px',
        // borderRadius:'4px',
        // padding: '10px',
        // paddingBottom: '10px',
        // border: '1px solid gray',
        // background: "linear-gradient(to left, #006972 0%,#008080 100%,#008080 100%)",
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
        padding: '10px',
    },
    socialIconDiv: {
        [theme.breakpoints.down('md')]: {
            padding: '40px'
        },
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
    trioFeatureBlock: {
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '100px',
            paddingRight: '100px',
            paddingBottom: '0px'
        },
    },
    trioFeatureGridBlock: {
        textAlign: 'center',
        display: 'flex'
    },
    trioFeatureCard: {
        padding: '60px',
        margin: 'auto'
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
        // width: '100%',
        height: '70px',
        // paddingTop: '100px',
        // position: 'absolute',
        background: 'linear-gradient(to right bottom, #006972 49%, #FFF 50%)'
    },
    skew2: {
        // width: '100%',
        height: '70px',
        // paddingTop: '100px',
        // position: 'absolute',
        background: 'linear-gradient(to right top, #006972 49%, #FFF 50%)'
    }
})


class Home extends Component {

    state = {
        ContactFormSubmitted : false,
        ContactBtnText : 'Send',
    }

    handleFetch(obj){
        
        console.log(obj);
        
        this.setState({ContactBtnText : 'Sending..'});
        const loadingAnimation = setTimeout(() => { 
            this.setState({ContactBtnText : 'Sending...'});
        }, 500);

        const loadingAnimation2 = setTimeout(() => { 
            this.setState({ContactBtnText : 'Sending.....'});
        }, 1000);

        let url = 'https://script.google.com/macros/s/AKfycbzmpiwLvqkMazpL_xBGN7qO0luaWq77b3quhU4WBPH86ePUXf8/exec?';
        for(let d in obj){
            url += d + '=' + obj[d] + '&';
        }

        fetch(url)
        .then((user) => {
            console.log(user);
            clearTimeout(loadingAnimation);
            clearTimeout(loadingAnimation2);
            this.setState({ContactFormSubmitted : true});
        })
        .catch((error) => {
            console.error(error);
        });

    }

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
                        <Typography variant="display1" style={{color: 'white',paddingBottom:'25px'}}>SEARCH FOR TUTOR</Typography>
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
                            <Grid container className={classes.pageGrid}>
                                <Grid item sm className={classes.trioImageBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <img alt="" src={TeacherImage} style={{width: '70%'}} />
                                    </div>
                                </Grid>
                                <Grid item sm className={classes.trioTextBlock}>
                                    <div style={{margin: 'auto'}}>
                                        <Typography variant="subtitle1">Basically Trio is an institution <br />which provides good teachers to students, <br />Home tutions or Group tutions as per your choice.</Typography>
                                        <Typography variant="subtitle1">With Trio there is no need to browse <br />through endless profiles, hassle and haggle.</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>  
                </div>
                {/* <div className={classes.skew2}></div> */}
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
                {/* <div className={classes.skew}></div> */}
                <div className={classes.trioFeatureBlock} ref={(section) => { setRef('trioAboutBlock', section); }}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '20px'}}>
                            <Typography variant="display1">What we offer?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className={classes.trioFeatureGridBlock}>
                                    <Grid item xs>
                                        <Grid container>
                                            <Grid item sm={12} md={6} lg className={classes.trioFeatureCard}>
                                                <img alt="" src={Premium} style={{width: '100px'}} />
                                                <br /><br />
                                                <Typography variant="subheading">High Quality Teaching</Typography>
                                            </Grid>
                                            <Grid item sm={12} md={6} lg className={classes.trioFeatureCard}>
                                                <img alt="" src={Repeat} style={{width: '100px'}} />
                                                <br /><br />
                                                <Typography variant="subheading">Replacement Guarantee</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs>
                                        <Grid container>
                                            <Grid item sm={12} md={6} lg className={classes.trioFeatureCard}>
                                                <img alt="" src={Chat} style={{width: '100px'}} /> 
                                                <br /><br />
                                                <Typography variant="subheading">Feedback Every Month</Typography>  
                                            </Grid>
                                            <Grid item sm={12} md={6} lg className={classes.trioFeatureCard}>
                                                <img alt="" src={Bicycle} style={{width: '100px'}} />
                                                <br /><br />
                                                <Typography variant="subheading">Fun Activities</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>  
                </div>
                <div className={classes.contactBlock} style={{paddingBottom: '70px'}} ref={(section) => { setRef('contactBlock', section); }}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '30px'}}>
                            <Typography variant="display1">About Us</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div style={{margin: 'auto'}}>
                                        <img alt="" src={AboutUsImage} style={{width: '70%'}} />
                                    </div>
                                </Grid>
                                <Grid item sm xs={12} className={classes.cardWrapper}>
                                    <div style={{margin: 'auto', textAlign: 'left'}}>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> Trio teachers are concentrating quality of teaching and proper guidance for students.</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> Our teachers will teach academic and soft skills so students can understand the social responsibilities</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> Idea of trio teachers is came from end the professionalism.</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> So we at trioteachers are trying to unwind the difficulties of getting a  tutor which is according to your expectations and exceed most of them. We are trying to deliver the best anyone could get in form of art, education, sports, yoga any category you name it.</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> This team is not only specialized in curricuars but also in co curriculars that will ensure the overall development of your child and will help them to rise to great heigts.</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> We at triotutors have highly trained professionals that will focus on bringing the best of your child.</Typography>
                                        <Typography variant="subtitle1"><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">👉</span> This not only gives you an edge over other tutors but provides you with an essurance of a personalized academic support.</Typography>
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
                                <Grid item sm={4} xs={12} className={classes.cardWrapper}>
                                    <div className={classes.cards} >
                                        <Typography variant="title">Trio Teachers</Typography>
                                        <br />
                                        <Typography variant="body1">
                                            202, <br />Sahajanand Complex, <br />Near Unique Group Tution, <br />New C. G. Road, <br />Chandkheda, <br />Ahmedabad 382424
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item sm={4} xs={12} className={classes.cardWrapper}>
                                        <div className={classes.cards}>

                                            <div style={{display : 'flex',marginBottom :'15px'}}>
                                                <PhoneIcon />
                                                <Typography style={{marginLeft : '10px'}} variant="body1">
                                                    8487999309
                                                </Typography>
                                            </div>
                                            
                                            <div style={{display : 'flex',marginBottom :'15px'}}>
                                                <PhoneIcon />
                                                <Typography style={{marginLeft : '10px'}} variant="body1">
                                                    7016373618
                                                </Typography>
                                            </div>
                                            
                                            <div style={{display : 'flex',marginBottom :'15px'}}>
                                                <EmailIcon />
                                                <Typography style={{marginLeft : '10px'}} variant="body1">
                                                trio.education.100@gmail.com
                                                </Typography>
                                            </div>
                                            
                                            <a href="https://m.facebook.com/Trio-Teachers-364527030757298/?ref=bookmarks" target="blank"><img alt="" src={Facebook} className={classes.socialIcons} /></a>
                                            <a href="https://twitter.com/TeachersTrio?s=08" target="blank"><img alt="" src={Twitter} className={classes.socialIcons} /></a>
                                            <a href="https://www.instagram.com/p/BpUO8m4Beqc/?utm_source=ig_share_sheet&igshid=95t9iwk79hei" target="blank"><img alt="" src={Instagram} className={classes.socialIcons} /></a>
                                            {/* <a href="http://google.com" target="blank"><img alt="" src={Youtube} className={classes.socialIcons} /></a> */}
                                            <a href="http://google.com" target="blank"><img alt="" src={Linkedin} className={classes.socialIcons} /></a>
                                        </div>

                                </Grid>
                                <Grid item sm={4} xs={12} className={classes.cardWrapper}>
                                    {!this.state.ContactFormSubmitted 
                                    ? (<Contact handleFetch = {this.handleFetch.bind(this)} buttonText = {this.state.ContactBtnText}/>) 
                                    : (<ThankYou/>)}
                                                
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {/* <div className={classes.footer}>
                    <Grid container>
                        <Grid item xs={12} style={{paddingBottom: '30px'}}>
                            <a href="https://m.facebook.com/Trio-Teachers-364527030757298/?ref=bookmarks" target="blank"><img alt="" src={Facebook} className={classes.socialIcons} /></a>
                            <a href="https://twitter.com/TeachersTrio?s=08" target="blank"><img alt="" src={Twitter} className={classes.socialIcons} /></a>
                            <a href="https://www.instagram.com/p/BpUO8m4Beqc/?utm_source=ig_share_sheet&igshid=95t9iwk79hei" target="blank"><img alt="" src={Instagram} className={classes.socialIcons} /></a>
                            <a href="http://google.com" target="blank"><img alt="" src={Youtube} className={classes.socialIcons} /></a>
                            <a href="http://google.com" target="blank"><img alt="" src={Linkedin} className={classes.socialIcons} /></a>
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);