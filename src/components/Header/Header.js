import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { saveText } from '../../store/actions/hotels-actions';

class Header extends React.Component {
  state = {};

  handleSearch = (event) => {
    this.props.filterHotels(event.target.value);
  };

  handleFilterPrice = (event) => {
    this.props.filterHotelsPrice(event.target.value);
  };

  handleClick = () => {
    this.props.dispatch(saveText('New text is here!'));
  };

  render() {
    return (
      <>
      <div className="header">
        <div className="search-loupe-circle"><i class="fas fa-search search-loupe"></i></div>
        <input type="text" className="search-field" placeholder="Enter location" onChange={this.handleSearch} />
      </div>
      <div className="header-second">
        <div className="price-field"><i class="fas fa-money-bill-wave dollar-icon"></i><input type="text" className="price-filter" placeholder="Min. Price" onChange={this.handleFilterPrice}/><span className="currency-txt">{this.props.currencySymbol}</span></div>
      </div>

      <input type="button" value="click" onClick={this.handleClick} />
      {this.props.savedText}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedText: state.text,
  };
};

export default connect(mapStateToProps)(Header);