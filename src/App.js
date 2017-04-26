import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Marvin",
      input:"",
      profile:{}
    }
  }

  hireable(){
    if(this.state.profile.hireable === true){
      return "Hireable"
    } else {
      return "not hireable"
    }
  }



  // function (){
  //
  //   axios.get(`https://api.github.com/users/${userName}`).then(response => {
  //     console.log(response.data)
  //      this.setState({profile: response.data})
  //   })
  // }

  componentDidMount(){
    axios.get(`https://api.github.com/users/Filusmarvin`).then(response => {
      console.log(response.data)
       this.setState({profile: response.data})
    })
  }
  render() {
    const user = this.state.profile;
    return (
      <div className="all">
        <section>
          <p className="title"> Marvin Filus </p>
          <form className="inputInfo">
            <input className="userInfo"type="search"></input>
            <input type="submit"></input>
          </form>
        </section>
        <div className="container">
          <div>
            <img src={user.avatar_url} width="300px" height="350px" alt=""></img>
            </div>
            <div className="box2">
            <h1> Hi my name is  {this.state.name}</h1>
            <p> Username: <strong> {user.login} </strong> </p>
            <p> Located in {user.location}</p>
            <p> I have more info on GitHub. <a href="{user.url}"> Click here to check it out!</a> </p>
            <p>If you would like to know more about me and my life please <a href="{user.blog}"> click here!</a></p>
            </div>
            <div className="box3">
            <p className="bio"> Bio </p>
            <p>{user.bio}.</p>
            </div>
          </div>
          <p> Id: {user.id}</p>
          <p> Hiring Status <span className="hire">{this.hireable()}</span></p>
      </div>
    );
  }
}

export default App;
