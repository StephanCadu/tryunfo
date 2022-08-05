import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import './App.css';
import Game from './components/Game';
import logoShippuden from './images-src/logoShippuden.png';
import logoTrunfo from './images-src/logoTrunfo.png';

// COMO EMBARALHAR UM ARRAY:
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// list = list.sort(() => Math.random() - 0.5)

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCards: [],
  randomCards: [],
  cardsCounter: 0,
};

export default class App extends React.Component {
  state = { ...INITIAL_STATE, nameInput: '', rareInput: 'all', trunfoCheck: false };

  componentDidMount() {
    this.getDeck();
  }

  componentDidUpdate() {
    const { savedCards } = this.state;
    localStorage.setItem('savedDeck', JSON.stringify(savedCards));
  }

  enableSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1: n1, cardAttr2: n2, cardAttr3: n3 } = this.state;
    const stringsNotEmpty = (cardName && cardDescription && cardImage && cardRare);
    const max = 210;
    const acceptableNumbers = (Number(n1) + Number(n2) + Number(n3) <= max);
    const maxAt = 90;
    const numbersOk = [n1, n2, n3].every((n) => Number(n) >= 0 && Number(n) <= maxAt);
    this.setState({
      isSaveButtonDisabled: !(stringsNotEmpty && acceptableNumbers && numbersOk),
    });
  }

  getDeck = () => {
    const recoveredDeck = JSON.parse(localStorage.getItem('savedDeck'));
    if (recoveredDeck) {
      this.setState({ savedCards: recoveredDeck }, () => this.searchTrunfo());
    }
  }

  onInputChange = ({ target: { name, value, type, checked } }) => {
    if (type === 'checkbox') value = checked;
    this.setState({ [name]: value }, () => this.enableSaveButton());
  }

  searchTrunfo = () => {
    const { savedCards } = this.state;
    this.setState({ hasTrunfo: savedCards.some(({ cardTrunfo }) => cardTrunfo) });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { hasTrunfo, isSaveButtonDisabled, savedCards, ...myCard } = this.state;
    this.setState({ ...INITIAL_STATE, savedCards: [...savedCards, myCard] },
      () => this.searchTrunfo());
  }

  removeCard = ({ target: { name } }) => {
    const { savedCards } = this.state;
    const newCards = savedCards.filter(({ cardName }) => cardName !== name);
    this.setState({
      savedCards: newCards,
    }, () => this.searchTrunfo());
  }

  playButtonClick = () => {
    const { savedCards } = this.state;
    const sortNum = 0.5;
    const shuffledCards = [...savedCards].sort(() => Math.random() - sortNum);

    this.setState({
      randomCards: shuffledCards,
      cardsCounter: 0,
    });
  }

  nextTurnClick = () => {
    this.setState(({ cardsCounter }) => ({ cardsCounter: cardsCounter + 2 }));
  }

  render() {
    const { savedCards, nameInput, rareInput, trunfoCheck } = this.state;
    return (
      <div className="flexColumn centered mainDiv">
        <header className="flex head">
          {/* <h1>Naruto Trunfo</h1> */}
          {/* <img src={ logoTrunfo } alt="Super Trunfo" className="titleTrunfo" /> */}
          <img src={ logoShippuden } alt="Naruto Shippuden" className="titleLogo" />
        </header>
        <div className="addCardContainer">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            { ...this.state }
          />
        </div>
        <div className="myCardsContainer">
          <Filters
            { ...this.state }
            onInputChange={ this.onInputChange }
          />
          <section className="savedCardsContainer">
            {savedCards.filter(({ cardName }) => !nameInput
              || cardName.includes(nameInput))
              .filter(({ cardRare }) => trunfoCheck || rareInput === 'all'
              || rareInput === cardRare)
              .filter(({ cardTrunfo }) => !trunfoCheck || cardTrunfo)
              .map((card, ind) => (
                <div key={ ind } className="flexColumn centered">
                  <Card
                    { ...card }
                  />
                  <button
                    type="submit"
                    data-testid="delete-button"
                    name={ card.cardName }
                    onClick={ this.removeCard }
                  >
                    remove
                  </button>
                </div>))}
          </section>
        </div>
        <Game
          { ...this.state }
          playButtonClick={ this.playButtonClick }
          nextTurnClick={ this.nextTurnClick }
        />
      </div>
    );
  }
}
