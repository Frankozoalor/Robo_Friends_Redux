import React from "react";
import { connect } from "react-redux";
import Cardlist from "../Components/Cardlist";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from '../Components/scroll';
import ErrorBoundry from "../Components/ErrorBoundry";

import {setSearchField,requestRobots} from '../action';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robot: state.requestRobots.robot,
        ispending: state.requestRobots.ispending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            robot: []
        }
    }
     componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{return Response.json();})
        .then(users => {this.setState({robot: users})})
     }


    render() {
        //const {robot} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = this.state.robot.filter(Robot =>{
            return Robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
           if(this.state.robot.length===0){
               return <h1>Loading</h1>
           }
           else{
            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchchange ={onSearchChange}/>
                    <Scroll> 
                    <ErrorBoundry>
                    <Cardlist Robot ={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
            )
           
           }
        }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(App);