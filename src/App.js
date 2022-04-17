import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
//import profile from './assets/profile.png'; // blank profile
//import profile from './assets/profile.jpg'; // my profile 1 jpg 
import profile from './assets/profile1.png'; // my profile 2 png 180x120 
class App extends Component {
    state = { displayBio: false};
    toggleDisplayBio = () =>{
        this.setState({ displayBio: !this.state.displayBio});
    }

   render(){
       return(
        <div>
            <img src={profile} alt='profile' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Aaron. I'm a software engineer.</p>
            <p>I'm always looking forward to working on meaningful projects.</p>
            {
                this.state.displayBio ? (
                    <div>
                        <p>I live in Dale City, and code every day.</p>
                        <p>My favorite language is JavaScript, and I think Reactj.js is awesome.</p>
                        <p>Besides coding, I also love running and barbecue!</p> 
                        <button onClick = {this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick ={this.toggleDisplayBio}>Read more</button>
                    </div>
                )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
        </div>           
       )
   } 
}

export default App;
