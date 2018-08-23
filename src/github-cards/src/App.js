import React, { Component } from 'react';
import CardList from "./components/card-list/cardlist";
import Form from "./components/form/form";

class App extends Component {
  state = {
    cards: [
      {
        name: "Paul O’Shannessy",
        avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
        company: "Facebook"
      },
      {
        name: "Sophie Alpert",
        avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
        company: "Facebook"
      },
    ]
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
