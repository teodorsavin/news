import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const activeStyle = { color: '#F1582A' };
  const countries = props.countries === undefined ? [] : props.countries;

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <br />
      {countries.map(country => {
        return (
          <NavLink to={{ pathname: `/country/${country.alpha2Code}` }}>
            <img
              src={country.flag}
              alt={country.alpha2Code}
              title={country.name}
            />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Header;
