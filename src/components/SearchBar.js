import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';


const styles = theme => ({
    wrapper:{
        marginTop : '30px',
    },
    textField: {
        width: "100%",
        borderColor: 'white',
        // color: 'white',
        padding: '10px',
        border: 'none',
        background: 'white',    
        borderRadius: '4px'
    },
    Button: { width : '100%',borderColor: 'white', color: 'white' }
});

const cityData = {  'Ahmedabad' : ['Paldi','Chandkheda','Maninagar','Khokhra','Hirabag Ambawadi','Vejalpur','Navrangpura','Vastrapur','Kalol','Motera,Sardar patel Ring Road','Sarkhej Gandhinagar Highway','Shahibaug','Sabarmati'],
                    'Gandhinagar' : ['KH-0'],
                    'Surat' : ['Mota Varachha','Adajan','Nanpura',],
                    'Mehsana' : ['Becharji'],
                    'Visnagar' : ['Kansa']   };


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = { selectedCity: props.selectedCity,selectedLocality : props.selectedLocality , localityArray :  cityData[props.selectedCity]};
        
    }

    static defaultProps = {
        selectedCity : Object.keys(cityData)[0],
        selectedLocality : cityData[Object.keys(cityData)[0]][0],
        smSize : 3,
        gridSpacing : 32,
     };

     
    handleChange = name => e => {
        let value = e.target.value;
        this.setState({
            [name] : value,
        },
        () => {  
            
            if(this.props.showResults){
                this.props.handleSelectorChange(this.state);
            }

            if(name === 'selectedCity'){
                
                this.setState({
                    selectedLocality : cityData[this.state.selectedCity][0],
                    localityArray : cityData[this.state.selectedCity],
                },() => {console.log(this.state)}); 
            }
        });      
    }


    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Grid container spacing={this.props.gridSpacing} justify="center" alignItems={'center'}>                
                    <Grid item xs={12} sm={this.props.smSize}>
                        <select
                            id="city"
                            label="City"
                            className={classes.textField}
                            value={this.state.selectedCity}
                            onChange={this.handleChange('selectedCity')}
                            margin="normal"
                            variant="outlined"
                            >
                            {Object.keys(cityData).map(option => {
                                return (
                                    <option key={option} value={option}>
                                    {option}
                                    </option>
                                )}
                            )}

                        </select>
                    </Grid>
                    <Grid item xs={12} sm={this.props.smSize}>
                        <select
                            id="locality"
                            label="Locality"
                            className={classes.textField}
                            value={this.state.selectedLocality}
                            onChange={this.handleChange('selectedLocality')}
                            margin="normal"
                            variant="outlined"
                            >
                            {this.state.localityArray.map(option => {
                                return(
                                    <option key={option} value={option}>
                                    {option}
                                    </option>
                                )}
                            )}
                        </select>
                    </Grid>
                    {/* <Grid item xs={12} sm={this.props.smSize}>
                        
                    </Grid> */}
                    {!this.props.showResults &&
                    <Grid item xs={12} sm={this.props.smSize}>
                        <Button className={classes.Button} variant="outlined"  component={NavLink} to={{ pathname: '/search', state: {...this.state} }}>
                        Enquire
                        </Button>
                    </Grid>}
                </Grid>
            </div>
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SearchBar);