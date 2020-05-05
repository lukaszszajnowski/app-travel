import React from 'react';
import { Link } from 'react-router-dom';
import './Hotel.scss';

const Hotel = ({ data, currencySymbol }) => {
return (
<div className="hotel" key={data.id}>
                <img src={data.image} alt={data.title} />
                <div className="hotel__info">
                  <Link to={"hotel/" + data.id}>
                    <span className="hotel-name">{data.title}</span>
                  </Link>
                  <p>{data.location}</p>
                  <span className="hotel-price">{data.price}{currencySymbol}</span>
                </div>
              </div>
              )
              }
 
export default Hotel;