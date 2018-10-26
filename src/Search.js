import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchSelectors from './components/SearchBar';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({ icon: {
    marginRight: theme.spacing.unit * 2,
},
heroUnit: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px'
},
heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
},
heroButtons: {
    // marginTop: theme.spacing.unit * 4,
    textAlign: 'center'
},
textField: {
    width: '100%'
},
layout: {
    width: 'auto',
    [theme.breakpoints.up('md')]: {
        marginRight: '100px',
        marginLeft: '100px'
    },
},
cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
},
card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
},
cardMedia: {
    paddingTop: '56.25%', // 16:9
    height : '250px',
},
cardContent: {
    flexGrow: 1,
},
footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
},
});

const TeacherCards = [  {id:1,name:"Suraj1",subject:"Chemistry",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg",},
                        {id:2,name:"Suraj2",subject:"Physics",imageUrl:""},
                        {id:3,name:"Suraj3",subject:"Biology",imageUrl:""},
                        {id:4,name:"Suraj4",subject:"Physics",imageUrl:""},
                        {id:5,name:"Suraj5",subject:"English",imageUrl:""}  ];

class Album extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            filteredTeachers : TeacherCards,
        }
        
    }

    componentWillMount(){
        this.handleSelectorChange(this.props);
    }

    handleSelectorChange(obj){
        console.log("handlechange" , obj);
        
        obj.selectedSubject && this.setState({
            filteredTeachers :TeacherCards.filter(e => e.subject === obj.selectedSubject)
        },()=>console.log(this.state));
        
    }

    render(){
        const { classes } = this.props;
        console.log("Search2",this.props);
        let selectedData = {};
        selectedData.selectedCity = this.props.selectedCity
        selectedData.selectedLocality = this.props.selectedLocality
        selectedData.selectedSubject = this.props.selectedSubject

        return (
            <React.Fragment>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                <CameraIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                    Hello
                </Typography>
                </Toolbar>  
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Main layout
                    </Typography>
                    <div className={classes.heroButtons}>
                        <SearchSelectors {...selectedData} showResults handleSelectorChange={this.handleSelectorChange.bind(this)}/>
                    </div>
                </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                {/* End hero unit */}
                <Grid container spacing={40}>
                    {this.state.filteredTeachers.map(card => (
                    <Grid item key={card.id} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.imageUrl}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                            </Typography>
                            <Typography>
                            {card.subject} : This is a media card. You can use this section to describe the content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                              Details
                            </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </div>
            </main>
            </React.Fragment>
        );
    }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);