import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    user: {},
    active:false
  }
  handleClick = () => {
    console.log("Clicked Me!!");
    fetch("http://api.github.com/users/AdrianLuley")
    .then(response => {
      return response.json();
    })
    .then(myJsobject => {
      console.log(myJsobject);
      this.setState({
        user:myJsobject,
        active: !this.state.active
      })
    });
  }
  render() {
    return (
      <div class='ui inverted segment'>
 
  

        <button  onClick={this.handleClick} class='ui animated button' role='button'>
            <div class='visible content'>Click Me!!!!</div>
            <div class='hidden content'>
            <i aria-hidden='true' class='arrow right icon' />
            </div>
            </button>
          {this.state.active &&
          <div class="box">
          <div class='ui horizontal inverted divider'>User Name</div>
          <p>{this.state.user.name}</p>
          
          <div class='ui horizontal inverted divider'></div>
          <img src={this.state.user.avatar_url} class='ui medium circular image'/>

          <div class='ui horizontal inverted divider'>School</div>
          <p>{this.state.user.company}</p>

          <div class='ui horizontal inverted divider'>Projects</div>
          <p>{this.state.user.public_repos}</p>

           
          </div>
          }
      </div>
    );
  }
}

export default App;
