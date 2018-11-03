import React, { Component }  from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Contact from './components/Contact';
import ThankYou from './components/thankYou';
import { Button,Collapse,TextField,Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    layout: {
      width: 'auto',
      padding : '20px',
      paddingTop : '75px',
      
      [theme.breakpoints.up(400)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    Button: {
        width: "100%",
        background: "linear-gradient(to left, #006972 0%,#008080 100%,#008080 100%)",
        color: 'white',
        marginTop : '50px',
    },
    paper: {
        margin: 'auto',
        padding : '25px'
    },
    selectField: {
        width: "100%",
        borderColor: 'white',
        marginTop : '25px',
        border: 'none',
        background: 'white',
        borderRadius: '4px'
    },
    textField: {
        width: "100%",
        borderColor: 'white',
        marginTop : '25px',
        border: 'none',
        padding : '10px',
        background: 'white',
        borderRadius: '4px'
    },
  });


const typeData = {  'Academic':['1','2','3','4','5','6','7','8','9','10','11/12th Arts','11/12th Commerce','11/12th Science'],
                    'Dance':[],
                    'Music':[],
                    'Financial Management':[],
                    'Competitive Exam':['IIT-Jee','Neet'],
                    'Creative Arts':['Painting','Calligraphy','GiftMaking','Sketching'],
                    'Personality Development':[],
                    'Computer':[],
                    'Fitness/Yoga':[],
                    'Martial Arts':[],
                };

const formStates = Object.freeze({"contactUs":1, "TypeInput":2, "Loading":3, "ThankYou" :4});

class Album extends Component {
    
    state = {
        formState : formStates.contactUs,
        selectedType : 'Academic',
        subCatergoryArray : typeData['Academic'],
        selectedSubject : '',
        selectedSubType : '',
        sendBtnText : 'Send'
    }
    
    static defaultProps = {
        selectedCity : 'Ahmedabad',
        selectedLocality : 'Paldi',
     };

    handleChange = name => e => {
        let value = e.target.value;
        this.setState({
            [name] : value,
        },
        () => {  
            console.log("handleChange",name,value,this.state);
            if(name === 'selectedType'){

                this.setState({
                    subCatergoryArray : typeData[this.state.selectedType],
                }); 
            }
        });      
    }
    
    handleSendClick(){
        
        //this.setState({formState:formStates.Loading});
        this.setState({sendBtnText : 'Sending..'});
        const loadingAnimation = setTimeout(() => { 
            this.setState({sendBtnText : 'Sending...'});
        }, 500);

        const loadingAnimation2 = setTimeout(() => { 
            this.setState({sendBtnText : 'Sending.....'});
        }, 1000);

        let url = 'https://script.google.com/macros/s/AKfycbzmpiwLvqkMazpL_xBGN7qO0luaWq77b3quhU4WBPH86ePUXf8/exec?';
        let data = {Name : this.state.Name,Contact : this.state.Contact, Email : this.state.Email, Description : this.state.Description ,
                    City : this.props.selectedCity, Locality : this.props.selectedLocality, 
                    Type : this.state.selectedType, SubType : this.state.selectedSubType, Subject : this.state.selectedSubject};

        for(let d in data){
            url += d + '=' + data[d] + '&';
        }

        fetch(url)
        .then((user) => {
            console.log(user);
            clearTimeout(loadingAnimation);
            clearTimeout(loadingAnimation2);
            this.setState({formState:formStates.ThankYou});
        })
        .catch((error) => {
            console.error(error);
        });

    }

    handleContactFetch(obj){ this.setState({formState:formStates.TypeInput,...obj},()=> console.log("handleContactFetch", this.state)); }

    render(){
        
        const { classes } = this.props;
        return (
            <React.Fragment>
            <CssBaseline />
            <main className={this.props.classes.layout}>



                <Collapse in={this.state.formState === formStates.contactUs}>
                    {/* <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom >
                                Get In Touch ...
                    </Typography> */}
                    <Contact handleFetch = {this.handleContactFetch.bind(this)} buttonText = 'Next'/>
                </Collapse>

                <Collapse in={this.state.formState === formStates.TypeInput}>
                    <Paper className={this.props.classes.paper}>
                        
                        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom >
                                Looking For
                        </Typography>

                        <select
                            id="type"
                            label="type"
                            className={classes.textField}
                            value={this.state.selectedType}
                            onChange={this.handleChange('selectedType')}
                            margin="normal"

                            variant="outlined"
                            >
                            {Object.keys(typeData).map(option => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </select>
                        
                        {this.state.subCatergoryArray.length > 0 && (
                        <select
                            id="class"
                            label="class"
                            
                            className={classes.textField}
                            value={this.state.selectedSubType}
                            onChange={this.handleChange('selectedSubType')}
                            margin="normal"
                            variant="outlined"
                            >
                            {this.state.subCatergoryArray.map(option => (
                                <option key={option} value={option}>
                                {option}
                                </option>
                            ))}
                        </select>
                        )}

                        {this.state.selectedType === 'Academic' && (

                            <TextField
                            id="subject"
                            label="subject"
                            className={classes.selectField}
                            value={this.state.selectedSubject}
                            onChange={this.handleChange('selectedSubject')}
                            margin="normal" />

                            )}

                        <Button variant="contained" className={this.props.classes.Button} onClick={this.handleSendClick.bind(this)}>{this.state.sendBtnText}</Button>
                      
                    </Paper>
                </Collapse>

                {/* <Collapse in={this.state.formState === formStates.Loading}>
                        <div style={{display :'flex', alignItems:'center',justifyContent:'center'}}>
                        
                        <CircularProgress className={classes.progress} size={50} />
                        </div>
                    
                </Collapse> */}

                <Collapse in={this.state.formState === formStates.ThankYou}>
                    <ThankYou/>
                </Collapse>

            </main>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Album);