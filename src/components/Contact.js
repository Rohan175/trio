import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({

    cardWrapper: {
        padding: '20px',
        minHeight: '300px',
        width: '100%',
        display: 'flex',
        textAlign: 'center'
    },
    cards: {
        margin: 'auto'
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
})


class Contact extends Component {

    state = {
        email: "",
        description: "",
        name : "",
        number : "",
        errors : {contact : [false,"Enter a phone number"],
                 name : [false,"Enter a name"],
                 email : [false,"Enter a Email address"]
        },
    }

    static defaultProps = {
        selectedData : {    
            selectedCity : '-',
            selectedLocality : '-',
            selectedSubject : '-',
            selectedClass : '-',
        }
     };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSendClick() {

        if(!(this.state.name && this.state.number && this.state.email)){
            let errorName;
            if(!(this.state.name)){
                errorName = 'name';
            }else if(!(this.state.number)){
                errorName = 'contact';
            }else if (!this.state.email){
                errorName = 'email';
            }

            this.setState((oldState) => {
                console.log(oldState,errorName);
                
                for(let key in oldState.errors){
                   oldState.errors[key][0] = false
                }

                oldState.errors[errorName][0] = true;
                return {errors : oldState.errors}
            });

        }else{

            let handleFetch = this.props.handleFetch;

            this.setState((oldState) => {
                console.log(oldState);
                
                for(let key in oldState.errors){
                   oldState.errors[key][0] = false
                }
                return {errors : oldState.errors}

            },() => handleFetch({loading : true}));


            let selectedData = this.props.selectedData;
            let url = 'https://script.google.com/macros/s/AKfycbzmpiwLvqkMazpL_xBGN7qO0luaWq77b3quhU4WBPH86ePUXf8/exec?'
            let data = {Name: this.state.name, Contact: this.state.number, Email: this.state.email, Description : this.state.description,
                        City : selectedData.selectedCity, Locality : selectedData.selectedLocality, Class : selectedData.selectedClass, Subject : selectedData.selectedSubject};
            for(let d in data){
                url += d + '=' + data[d] + '&';
            }

            console.log(selectedData, url);
            

            fetch(url)
            .then((user) => {
                console.log(user);
                handleFetch({loaded : true});
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }


  render() {

    let { classes } = this.props;

    return (
      <div>
        
        <Grid container>

                        <div className={classes.cards}>

                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    error = {this.state.errors['name'][0]}
                                    helperText = {this.state.errors['name'][0] && this.state.errors['name'][1]}
                                    onChange={this.handleChange('name')}
                                    margin="normal" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="phone"
                                    label="Contact Number"
                                    type="tel"
                                    error = {this.state.errors['contact'][0]}
                                    helperText = {this.state.errors['contact'][0] && this.state.errors['contact'][1]}
                                    className={classes.textField}
                                    value={this.state.number}
                                    onChange={this.handleChange('number')}
                                    margin="normal" />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="email"
                                    className={classes.textField}
                                    value={this.state.email}
                                    error = {this.state.errors['email'][0]}
                                    helperText = {this.state.errors['email'][0] && this.state.errors['email'][1]}
                                    onChange={this.handleChange('email')}
                                    margin="normal" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="desc"
                                    label="Description"
                                    multiline
                                    rows="5"
                                    className={classes.textField}
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                    margin="normal" />
                            </Grid>
                        </Grid>
                            <br /><br />
                        <Button variant="raised" className={classes.Button} onClick={this.handleSendClick.bind(this)}>Send</Button>

                            
                        </div>
                    </Grid>

      </div>
    )
  }
}


Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);