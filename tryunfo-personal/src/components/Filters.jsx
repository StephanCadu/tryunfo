import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    const { nameInput, onInputChange, rareInput, trunfoCheck } = this.props;
    return (
      <section className="flex filtersContainer">
        <h2 className="filtersTitle">Filters</h2>
        <label htmlFor="nameInput" className="flexColumn">
          <h5 className="filterH5">Search by name  :</h5>
          <input
            type="text"
            placeholder="Card name"
            data-testid="name-filter"
            name="nameInput"
            id="nameInput"
            value={ nameInput }
            onChange={ onInputChange }
            disabled={ trunfoCheck }
            className="filters"
          />
        </label>
        <label htmlFor="rareInput" className="flexColumn">
          <h5 className="filterH5">Search by rarity  :</h5>
          <select
            id="rareInput"
            value={ rareInput }
            onChange={ onInputChange }
            name="rareInput"
            data-testid="rare-filter"
            disabled={ trunfoCheck }
            className="filters"
          >
            <option disabled value="">Select</option>
            <option value="all">All</option>
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
        </label>
        <label htmlFor="trunfoCheck">
          Super Trunfo
          <input
            type="checkbox"
            id="trunfoCheck"
            name="trunfoCheck"
            data-testid="trunfo-filter"
            onChange={ onInputChange }
            checked={ trunfoCheck }
          />
        </label>
      </section>
    );
  }
}

Filters.propTypes = {
  nameInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  rareInput: PropTypes.string.isRequired,
  trunfoCheck: PropTypes.bool.isRequired,
};
