import React from 'react';
import './Sidebar.scss';
import AddHotel from '../AddHotel/AddHotel';
// import axios from 'axios';
import { connect } from 'react-redux';

class Sidebar extends React.Component {

  state = {
    // sidebarData: [],
    // hotels: [],
    show: false
  };

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  // componentDidMount() {
  //   const API = 'https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended';
  //   axios.get(API).then((res) => { 
  //   this.setState({
  //     sidebarData: res.data,
  //     isLoading: false
  //   })
  // });
  // }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-block sidebar-hotels">
              <h2>More than just hotels</h2>
          <div className="s-list">
            {this.props.hotels.map((hotel, index) => {
              if (hotel.recommended) return (
                <div className="s-hotel" key={index}>
                  <div
                    className="s-photo"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  ></div>
                  <div className="s-info">
                    <span className="s-title">{hotel.title}</span>
                    <span className="s-location">{hotel.location}</span>
                    <span className="s-price">{hotel.price}$</span>
                  </div>
                  <div className="s-button">
                    <div className="s-dot"></div>
                    <div className="s-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>
            <button className="form-control" onClick={e => {this.showModal();}}>{this.state.show === false ? "Adding hotels" : "Close"}</button>
            <AddHotel show={this.state.show}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels,
});


export default connect(mapStateToProps)(Sidebar);
// export default Sidebar;