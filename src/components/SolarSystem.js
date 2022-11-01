import React from 'react';

import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />

        <div className="solar-system-planets" data-testid="missions">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetImage={ planet.image }
                planetName={ planet.name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
