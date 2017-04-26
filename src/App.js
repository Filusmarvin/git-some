import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.focus = this.focus.bind(this);
    this.state = {
      name: "Marvin",
      input:"",
      profile:{}
    }
  }

   hireable(){
    if(this.state.profile.hireable === true){
      return "Yes"
    } else {
      return "No"
    }
  }

  bioInfo (){
    if (this.state.profile.bio > 0){
      console.log(this.state.profile.bio.length)
      return this.state.profile.bio
    }
    else {
      return null
    }
  }


  componentDidMount(){
    axios.get(`https://api.github.com/users/Filusmarvin`).then(response => {
      console.log(response.data.bio.length)
       this.setState({profile: response.data})
    })
  }

  focus() {
    console.log(this.textInput.value)
    axios.get("https://api.github.com/users/" + this.textInput.value).then(response => {
       this.setState({profile: response.data})
  })
}

  render() {
    const user = this.state.profile;
    return (
      <div className="all">
        <section>
          <p className="title"> Marvin Filus </p>
            <input className="userInfo" type="text"  ref={(input) => { this.textInput = input; }}/>
            <input className="button" type="button" value="search" onClick={this.focus.bind(this)}/>
        </section>
        <div className="container">
          <div>
            <img src={user.avatar_url} width="300px" height="350px" alt=""></img>
            </div>
            <div className="box2">
            <h1> Hi my name is  {this.state.name}</h1>
            <p> Username: <strong> {user.login} </strong> </p>
            <p> Location: {user.location}</p>
            <p> Github Account: <a href="{user.url}"> Click here!</a> </p>
            <p> Blog site: <a href="{user.blog}"> click here!</a></p>
            <p> Id: {user.id}</p>
            <p> Available for hire? <span className="hire">{this.hireable()}</span></p>
            </div>
            <div className="box3">
            <p className="bio"> Bio </p>
            <p> {user.bio} </p>
            </div>
          </div>
          <div className="class">
          <input className="people" type="button" value="Chris Lebbano" />
          <input className="people" type="button" value="William Jr"/>
          <input className="people" type="button" value="Detra Sheard"/>
          <input className="people" type="button" value="Tyler Davis"/>
          <input className="people" type="button" value="Conshus"/>
          <input className="people" type="button" value="John Rowell"/>
          </div>
      </div>
    );
  }
}

export default App;
