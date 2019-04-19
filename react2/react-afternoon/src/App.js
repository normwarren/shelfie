import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Header from './Header';


class App extends Component {

  state ={
    id: 0,
    name: { 
      first: "Waylin", 
      last: "Lumsdon" },
    city: "Likiep",
    country: "Marshall Islands",
    employer: "Twinder",
    title: "Physical Therapy Assistant",
    favoriteMovies: [
      "That Night in Varennes (Nuit de Varennes, La)",
      "Spy(ies) (Espion(s))",
      "Klip (Clip)"]
  }
  
  updateNext = () =>{
    let max = data.length-1;
    if(this.state.id >= max){
      this.setState({id: max})
    }else {
    let nextId = this.state.id + 1;
    this.setState({
      id: nextId})
  }
  }
  updatePrevious = () =>{
    if(this.state.id <= 0 ){
      this.setState({id: 0})
    }else {
    let prevId = this.state.id - 1;
    this.setState({
      id: prevId})
    }
  }


  render() {
    
    console.log(data[this.state.id])
    let peepId = data[this.state.id]
    console.log(data[this.state.id].favoriteMovies)
    const movies = data[this.state.id].favoriteMovies.map((movie, index) => {
      return <li key={index}>{movie}</li>
      
     })

    return (
      <div className="App">
        <Header />
        <div className="BackColor">
          <div className="FrontColor">
            <h2>{this.state.id}</h2>
            <h3>{`${peepId.name.first} ${peepId.name.last}`}</h3>
            <p><b>From:</b> {`${peepId.city}, ${peepId.country}`}</p>
            <p><b>Job Title:</b> {`${peepId.title}`}</p>
            <p><b>Employer:</b> {`${peepId.employer}`}</p>
            <p><b>Favorite Movies: </b></p>
            <ol className="ol">{movies}</ol>

          </div>
            <div className="btn">
              <button onClick={this.updatePrevious}>Previous</button>
              <button onClick={this.updateNext}>Next</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
