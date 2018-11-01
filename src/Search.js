import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SearchSelectors from './components/SearchBar';

import './search.css';

const TeacherCards = [  {id:1,name:"Suraj1",subject:"Chemistry",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg",},
                        {id:2,name:"Suraj2",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {cssId:"size",id:3,name:"Suraj3",subject:"Biology",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:4,name:"Suraj4",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:5,name:"Suraj5",subject:"English",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:6,name:"Suraj6",subject:"Chemistry",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg",},
                        {id:7,name:"Suraj7",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:8,name:"Suraj8",subject:"Biology",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:9,name:"Suraj9",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:10,name:"Suraj10",subject:"English",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:11,name:"Suraj11",subject:"Chemistry",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg",},
                        {id:12,name:"Suraj12",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:13,name:"Suraj13",subject:"Biology",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:14,name:"Suraj14",subject:"Physics",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"},
                        {id:15,name:"Suraj15",subject:"English",imageUrl:"https://i.pinimg.com/originals/a5/ce/7c/a5ce7cb72cd19f4f7e66858037f4af42.jpg"}  ];

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

        obj.selectedSubject && this.setState({
            filteredTeachers :TeacherCards.filter(e => e.subject === obj.selectedSubject)
        });
        
    }

    render(){
    
        let selectedData = {};
        selectedData.selectedCity = this.props.selectedCity
        selectedData.selectedLocality = this.props.selectedLocality
        selectedData.selectedSubject = this.props.selectedSubject
        selectedData.selectedClass = this.props.selectedClass
        return (
            <React.Fragment>
            <CssBaseline />
            <main>
                <div id='searchSelectorContainer'>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Search 
                    </Typography>
                    <div>
                        <SearchSelectors {...selectedData} showResults handleSelectorChange={this.handleSelectorChange.bind(this)}/>
                    </div>
                </div>

                <div id='searchResultsContainer'>
                    {this.state.filteredTeachers.map(card => (
                    <div className='teacherCard' key={card.id} id={card.cssId}>
                        <Card >
                        <CardMedia
                            component='img'
                            src = {card.imageUrl}
                            alt ='teacher'
                            height = "175"
                            width = "200"
                        />
                        <CardContent>
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
                    </div>
                    ))}
                </div>

            </main>
            </React.Fragment>
        );
    }
}

export default Album;