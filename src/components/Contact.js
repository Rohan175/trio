import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
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
        margin: 'auto',
        padding : '25px'
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
        errors : {contact : [false,"Enter a valid phone number"],
                 name : [false,"Enter a name"],
                 email : [false,"Enter a valid Email address"]
        },
    }

    static defaultProps = {
        buttonText : 'Send'
     };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSendClick() {
        console.log(this.state);
        let errorName;
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!(this.state.name)){
            errorName = 'name';
        }else if(!this.state.number || this.state.number.length != 10){
            errorName = 'contact';
        }else if (!this.state.email || !(reg.test(this.state.email))){
            console.log('here');
            errorName = 'email';
        }
        
        if(errorName){
            this.setState((oldState) => {
                console.log(oldState,errorName);
                
                for(let key in oldState.errors){
                    oldState.errors[key][0] = false
                }
    
                oldState.errors[errorName][0] = true;
                return {errors : oldState.errors}
            });
    
        }else{
            this.setState((oldState) => {
                console.log(oldState);
                
                for(let key in oldState.errors){
                   oldState.errors[key][0] = false
                }
                return {errors : oldState.errors}

            });
            let data = {Name: this.state.name, Contact: this.state.number, Email: this.state.email, Description : this.state.description};
            this.props.handleFetch(data);
        }
    }


  render() {

    let { classes } = this.props;

    return (
      <Paper>
        
        <Grid container>

                        <div className={classes.cards}>

                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.state.name}
                                    inputProps={{
                                        maxLength: 20,
                                    }}
                                    error = {this.state.errors['name'][0]}
                                    helperText = {this.state.errors['name'][0] && this.state.errors['name'][1]}
                                    onChange={this.handleChange('name')}
                                    margin="normal" />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="phone"
                                    label="Contact Number"
                                    type="number"
                                    inputProps={{
                                        maxLength: 10,
                                    }}
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
                                    inputProps={{
                                        maxLength: 20,
                                    }}
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
                                    rows="4"
                                    inputProps={{
                                        maxLength: 500,
                                    }}
                                    className={classes.textField}
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                    margin="normal" />
                            </Grid>
                        </Grid>
                            <br /><br />
                        <Button variant="contained" className={classes.Button} onClick={this.handleSendClick.bind(this)}>{this.props.buttonText}</Button>
                        </div>
                    </Grid>

      </Paper>
    )
  }
}


Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);