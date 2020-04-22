import React from 'react';
import './Sidebar.scss';
import AddHotel from '../AddHotel/AddHotel';
import Preloader from '../Preloader/Preloader';
import axios from 'axios';

class Sidebar extends React.Component {

  state = {
    sidebarData: [],
    isLoading: true,
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  componentDidMount() {
    const API = 'https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended';
    axios.get(API).then((res) => { 
    this.setState({
      sidebarData: res.data,
      isLoading: false
    })
  });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-block sidebar-hotels">
        {this.state.isLoading ? 
              <Preloader />
                  : 
              <h2>More than just hotels</h2>}
          <div className="s-list">
            {this.state.sidebarData.map((hotel, index) => {
              return (
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

export default Sidebar;