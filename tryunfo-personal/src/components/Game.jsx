import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import versus from '../images-src/vsLogo.webp';

export default class Game extends Component {
  state = {
    chosenAttribute: '',
    attP1: '',
    attP2: '',
    pointsP1: 0,
    pointsP2: 0,
    turn: 1,
  }

  // requisitos para o game:
  // - escolha de atributos
  // - pontuação dos jogadores
  // - verificar turno
  // - iniciar carta do adversário virada
  // - alertar ganhador no fim do jogo

  // o que preciso para escolher atributos:
  // - valor dos atributos (ambos jogadores)
  // - relacionar cada botão clicado com um atributo (ambos jogadores)

  // o que preciso para criar a pontuação:
  // - comparar o valor do atributo escolhido
  // - criar container da pontuação
  // - somar para o ganhador ou não, se der empate

  render() {
    const {
      randomCards,
      cardsCounter,
      playButtonClick,
      nextTurnClick,
    } = this.props;

    return (
      <div className="flexColumn gameContainer">
        {/* <div className="titleDiv"></div> */}
        <h1 className="flex centered gameTitle">Player 1 choose</h1>
        <section className="flex playersContainer">
          <div className="players">
            <Card { ...randomCards[cardsCounter] } />
          </div>

          <img src={ versus } alt="Versus" className="versusImg" />

          <div className="players">
            <Card { ...randomCards[cardsCounter + 1] } />
          </div>
        </section>

        <section className="flexColumn buttonsContainer">

          <button
            type="button"
            id="nextTurnButton"
            onClick={ nextTurnClick }
            className="gameButtons"
          >
            Next turn
          </button>

          {/* com router, botão jogar deve ficar separado desse componente */}
          <button
            type="button"
            id="playButton"
            onClick={ playButtonClick }
            className="gameButtons"
          >
            { randomCards.length ? 'Play again' : 'Play' }
          </button>

        </section>

        <section className="flex centered chooseContainer">

          <button
            type="button"
            id="ninjutsuButton"
            // onClick={ chooseButtonClick }
            className="chooseButtons"
          >
            Ninjutsu
          </button>

          <button
            type="button"
            id="taijutsuButton"
            // onClick={ chooseButtonClick }
            className="chooseButtons"
          >
            Taijutsu
          </button>

          <button
            type="button"
            id="genjutsuButton"
            // onClick={ chooseButtonClick }
            className="chooseButtons"
          >
            Genjutsu
          </button>

        </section>

        <section className="flex centered pointsContainer">

          <div className="flexColumn centered playersPoints">
            <p>Player 1</p>
            <div className="flex centered points">0</div>
          </div>

          <div className="flexColumn centered playersPoints">
            <p>Player 2</p>
            <div className="flex centered points">0</div>
          </div>

        </section>

      </div>
    );
  }
}

Game.defaultProps = {
  randomCards: [],
  nextTurnClick: () => {},
};

Game.propTypes = {
  randomCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
    }),
  ),
  cardsCounter: PropTypes.number.isRequired,
  playButtonClick: PropTypes.func.isRequired,
  nextTurnClick: PropTypes.func,
};
