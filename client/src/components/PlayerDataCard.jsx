import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WrapperDiv = styled.div`
 display: flex;
 flex-wrap: wrap;
`;

const PlayerDiv = styled.div`
    border: 1px solid black;
    width: 20%;
    margin: 2%;

`;



class PlayerDataCard extends Component {
    
    state={
        player: []
    }

  componentDidMount(){
      console.log('component did mount');
      axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            console.log(res.data);
            this.setState({player: res.data});
        })
        .catch(err => console.log(err.message));
  }
   

   
    
    
    
    
    
    
    
    render() {
        return (
            <WrapperDiv>
             {this.state.player.map(elem => (
                 <PlayerDiv key={elem.id}>
                     <h2>Player Name: {elem.name}</h2>
                     <h3>Player Country: {elem.country}</h3>
                     <h4>Number of Searches: {elem.searches}</h4>
                 </PlayerDiv>
             ))}
            </WrapperDiv>
        );
    }
}

export default PlayerDataCard;