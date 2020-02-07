import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import images from "./images.json"
import "./App.css"

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    clicked: [],
    text: "Take a Guess!"
  }

 

  clickMe = id => {
    if(this.state.clicked.includes(id)){
      this.setState({text:"You got sent home :("})
      if(this.state.highScore < this.state.score){
        this.setState({highScore: this.state.score})
      };
      this.setState({clicked: []})
      this.setState({score: 0})
    }
    else{
      this.setState({text: "You got a rose!"})
      this.setState({score: this.state.score + 1})
      this.setState({clicked: [...this.state.clicked, id]})
    };

    const newClicked = this.state.images
    this.shuffleImages(newClicked)

  };
  shuffleImages = newClicked => {
    for(var i = newClicked.length -1; i > 0; i--){
      const j = Math.floor(Math.random() * (i +1))
      const temp = newClicked[i];
      newClicked[i] = newClicked[j]
      newClicked[j] = temp
    };
  };

  render() {
    return (
      <div>
        <Navbar
          text={this.state.text}
          score={this.state.score}
          highScore={this.state.highScore} />
        <div className="jumbotron text-center">
          <h1>Bachelor Clicky Game</h1>
          <p>Click on image for 1 point but be careful and don't click on one more than once!</p>
          <Wrapper>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                image={image.image}
                clickMe={this.clickMe}
              />
            ))}
          </Wrapper>
        </div>
      </div>

    )
  }
}

export default App;
