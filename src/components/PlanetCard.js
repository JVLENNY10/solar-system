import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;

    return (
      <div className="planet-card" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img alt={ `Planeta ${planetName}` } src={ planetImage } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
