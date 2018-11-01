import React, { Component }  from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SearchSelectors from './components/SearchBar';
import Contact from './components/Contact';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
class Album extends Component {
    
    constructor(props){     
        super(props);

        let selectedData = {};
        selectedData.selectedCity = this.props.selectedCity
        selectedData.selectedLocality = this.props.selectedLocality
        selectedData.selectedSubject = this.props.selectedSubject
        selectedData.selectedClass = this.props.selectedClass

        this.state = {
            selectedData : selectedData,
            loaded : false,
            loading : true,
        }
    }

    static defaultProps = {
        selectedCity : 'Ahmedabad',
        selectedLocality : 'Paldi',
        selectedSubject : 'Chemistry',
        selectedClass : 10,
     };

    componentWillMount(){
        this.handleSelectorChange(this.props);
    }

    handleSelectorChange(obj){
        obj = {...obj}
        this.setState({selectedData : obj});
            console.log(this.state);
            
    }

    handleFetch(obj){

        this.setState({...obj},()=> console.log(this.state));

        console.log(obj);
        if(obj.loading){
            console.log("loading")
        }else if(obj.loaded){
            console.log("Loaded");
        }
    }

    render(){
        


        return (
            <React.Fragment>
            <CssBaseline />
            <main>
            {this.state.loading && (<div style={{margin:'0 auto'}}><CircularProgress style={{margin:'0 auto'}} size={50} /> </div>)}
            {this.state.loaded ? ("success") : (
                <Grid container style={{marginTop : '75px'}}>

                    <Grid item xs={12} sm={6} style={{padding:'25px'}}>  
                        <div id='searchSelectorContainer'>
                            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom style={{margin:'25px',marginBottom : '65px'}}>
                                Get In Touch
                            </Typography>
                            <div>
                                <SearchSelectors {...this.state.selectedData} smSize = {12} gridSpacing={40} showResults handleSelectorChange={this.handleSelectorChange.bind(this)}/>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{padding:'25px'}}>  
                        <Contact handleFetch = {this.handleFetch.bind(this)} selectedData = {this.state.selectedData}/>
                    </Grid>

                </Grid>
            )}
            </main>
            </React.Fragment>
        );
    }
}

export default Album;