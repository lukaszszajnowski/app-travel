import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/Header/Header';
import rates from '../../utils/rates';
import { connect } from 'react-redux';
import { getHotels } from '../../store/actions/hotels-actions';

class HomeView extends React.Component {
  state = {
    hotels: [],
    sort: true,
    dataFromApi: [],
    currency: 'USD'
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : this.props.hotels
    });
  };


  filterHotelsPrice = (price) => {
    const filteredHotels = this.props.hotels.filter((hotel) => {
      return hotel.price >= parseInt(price);
    });

    this.setState({
      hotels: price.length > 0 ? filteredHotels : this.props.hotels,
    });
  };


  convertPrice = event => {
    console.log(event.target.value);
    this.setState({
      currency: event.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('PrevProps is ' + prevProps);
    // console.log('PrevState is ' + prevState);
    if (prevState.currency !== this.state.currency) {
      const dataCopy = JSON.parse(JSON.stringify(this.state.dataFromApi));

    const hotelsNew = dataCopy.map(hotel => {
      hotel.price = Math.ceil(hotel.price * rates[this.state.currency])
      return hotel;
    })
    
    this.setState({
      hotels: hotelsNew
    });
  }
  }

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    console.log('HomeView -> sortHotels -> this.props.hotels', this.props.hotels)
    return this.props.hotels.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    });
  };

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels(),
    });
  };

  componentDidMount() {
    if (!this.props.hotels.length) {
      this.props.getHotels();
    }
  }

  render() {
    return (
      <>
        <Header 
          filterHotels={this.filterHotels} 
          filterHotelsPrice={this.filterHotelsPrice} 
          currencySymbol={this.state.currency} />
        <MainContainer 
          data={this.props.hotels} 
          switchSort={this.switchSort} 
          sort={this.state.sort} 
          convertPrice={this.convertPrice} 
          currencySymbol={this.state.currency} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels
})

const mapDispatchToProps = (dispatch) => ({
  getHotels: (hotels) => dispatch(getHotels())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);