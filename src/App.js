import React from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json"
import CharactersCard from "./components/Characters";


class App extends React.Component {
  state = {
    score: 0,
    record: 0,
    characters
  }

  componentDidMount(){
    this.setState({characters: this.shuffle(this.state.characters)});
  }

  shuffle = characters => {
    let newcharacters = characters.sort((a, b) =>{return 0.5 - Math.random()});
    return newcharacters;
  }

  restart = characters => {
    const resetCharacters = characters.map(props => ({...props, clickStatus: false}));
    return this.shuffle(resetCharacters)
  }
  
  goodGuess = newCharacters => {
    let currentScore = this.state.score;
    currentScore++;
    let newRecord = Math.max(currentScore, this.state.record);

    this.setState({
      characters : this.shuffle(newCharacters),
      score : currentScore,
      record: newRecord,
    })
  }

  badGuess = newCharacters => {
    this.setState({
      characters: this.restart(newCharacters),
      score: 0
    })
  }
  
  handleScore = (id) => {

    let correctGuess = false;

    const newCharacters = this.state.characters.map(props => {
      if(props.id===id){
        if (!props.clickStatus){
          props.clickStatus = true;
          correctGuess = true;
        }
      }
      return props;
    });
    correctGuess ? this.goodGuess(newCharacters) : this.badGuess(newCharacters);

  }

render() {
  return(
    <Wrapper>
      <div className="App-header">
      <Title>Stranger Game</Title></div>
      <div className="container">
      <div className="score">Score: {this.state.score}</div>
      <div className="score">Record: {this.state.record}</div>
      </div>
      
      <div className="container">
        <div className="row">
      {this.state.characters.map(characters => (
        <CharactersCard
        
        handleScore={this.handleScore}
        name={characters.id}
        id={characters.id}
        image={characters.image}
        />
      ))}
      </div>
      </div>
    </Wrapper>
  )
}

};

export default App;
