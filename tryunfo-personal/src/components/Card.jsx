import React, { Component } from 'react';
import PropTypes from 'prop-types';
import handSign from '../images-src/handJutsu.png';
import taijutsu from '../images-src/taijutsu.png';
import genjutsu from '../images-src/genjutsu.png';
import logoTrunfo from '../images-src/TROP024.png';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className={ `flexColumn centered cards ${cardRare}` }>
        <h2 data-testid="name-card" className="cardName">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="cardImg"
        />
        <div className="cardDescript">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div className="atributesContainer">
          <div className="flexColumn centered attImageContainer">
            <img
              src={ handSign }
              title="ninja icons"
              alt="ninjutsu"
              className="ninjutsuImage"
            />
            <h4 data-testid="attr1-card" className="attValue">{ cardAttr1 }</h4>
          </div>
          <div className="attImageContainer">
            <img
              src={ taijutsu }
              title="ninja icons"
              alt="taijutsu"
              className="attImage"
            />
            <h4 data-testid="attr2-card" className="attValue">{ cardAttr2 }</h4>
          </div>
          <div className="attImageContainer">
            <img
              src={ genjutsu }
              title="ninja icons"
              alt="genjutsu"
              className="attImage"
            />
            <h4 data-testid="attr3-card" className="attValue">{ cardAttr3 }</h4>
          </div>
        </div>
        <h3 data-testid="rare-card" className="cardRarity">{ cardRare }</h3>
        { cardTrunfo ? (
          <img
            src={ logoTrunfo }
            alt={ cardName }
            className="trunfoImg"
          />
        ) : '' }
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};
