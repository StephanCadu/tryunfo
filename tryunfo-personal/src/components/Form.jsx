import React from 'react';
import PropTypes from 'prop-types';
// import Input from './Input';

export default class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const trunfoInput = (
      <div className="superTrunfoInput">
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            type="checkbox"
            id="trunfo-input"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );

    const mySelect = (
      <select
        id="rare-input"
        data-testid="rare-input"
        name="cardRare"
        value={ cardRare }
        className="rankInput"
        onChange={ onInputChange }
      >
        <option disabled value="">Select</option>
        <option value="genin">Genin</option>
        <option value="chuunin">Chuunin</option>
        <option value="jounin">Jounin</option>
        <option value="anbu">ANBU</option>
        <option value="sennin">Sennin</option>
        <option value="kage">Kage</option>
        <option value="legendary">Legendary</option>
        <option value="renegade">Renegade</option>
        <option value="akatsuki">Akatsuki</option>
      </select>
    );

    return (
      <form className="myForm">
        <p className="formTitle">Add new card!</p>
        {/* <fieldset> */}
        <label htmlFor="name-input" className="flexColumn info">
          Name  :
          <input
            type="text"
            id="name-input"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            className="infoInput"
          />
        </label>
        <label htmlFor="cardDescription" className="flexColumn info">
          Description  :
          <textarea
            id="cardDescription"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            className="infoInput"
          />
        </label>
        <label htmlFor="image-input" className="flexColumn info">
          Image  :
          <input
            type="text"
            id="image-input"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            className="infoInput"
          />
        </label>

        <section className="flex botFormContainer">
          <section className="flexColumn centered statsContainer">
            <label htmlFor="attr1-input" className="flexColumn centered stats">
              Ninjutsu  :
              <input
                type="number"
                id="attr1-input"
                name="cardAttr1"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
                className="statsInput"
              />
            </label>
            <label htmlFor="attr2-input" className="flexColumn centered stats">
              Taijutsu  :
              <input
                type="number"
                id="attr2-input"
                name="cardAttr2"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
                className="statsInput"
              />
            </label>
            <label htmlFor="attr3-input" className="flexColumn centered stats">
              Genjutsu  :
              <input
                type="number"
                id="attr3-input"
                name="cardAttr3"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
                className="statsInput"
              />
            </label>
          </section>

          <section className="felxColumn rankTrunfoContainer">
            <label htmlFor="rare-input" className="flexColumn rankInfo">
              Ninja Rank  :
              { mySelect }
            </label>
            { hasTrunfo ? (
              <div className="trunfoExistsText">
                Super Trunfo already exists in your deck
              </div>
            ) : trunfoInput }
          </section>

        </section>
        <button
          className="saveBtn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Save Card
        </button>
        {/* </fieldset> */}
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
