import React from 'react';
import './Header.scss';

class Header extends React.Component {
  state = {};

  handleSearch = event => {
    this.props.filterHotels(event.target.value);
  };

  render() {
    return (
      <div className="header">
        <div className="search-loupe-circle"><i class="fas fa-search search-loupe"></i></div>
        <input type="text" className="search-field" placeholder="Enter location" onChange={this.handleSearch} />
      </div>
    );
  }
}

export default Header;