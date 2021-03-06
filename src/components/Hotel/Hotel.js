import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.scss';
import LikeButton from '../LikeButton/LikeButton';
import PropTypes from 'prop-types';

const Hotel = ({ data, removable, currencySymbol }) => {
return (
<div className="hotel" key={data.id}>
                <img src={data.image} alt={data.title} />
                <div className="hotel__info">
                  <Link to={"hotel/" + data.id}>
                    <span className="hotel-name">{data.title}</span>
                  </Link>
                  <p>{data.location}</p>
                  <span className="hotel-price">{data.price}{currencySymbol}</span>
                  <LikeButton hotel={data} />
                </div>
              </div>
              )
              }

Hotel.propTypes = {
  data: PropTypes.object,
  removable: PropTypes.bool,
}
 
export default Hotel;