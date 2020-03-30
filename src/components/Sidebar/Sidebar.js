import React from 'react';
import './Sidebar.scss';
import sidebar_data from '../../utils/sidebar_data';

const recommendedHotels = sidebar_data.map((item, index ) => {
return (
<div key="index" className="sidebar__element">
    <img src={item.image}/>
    <div>
    <h2>{item.title}</h2>
    <h3>{item.location}</h3>
    <div class="badge badge-danger">{item.price + "$"}</div>
    </div>
</div>
)
} );

class Sidebar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="sidebar">
                <h1>More than just hotels</h1>
                <span>{recommendedHotels}</span>
            </div>
         );
    }
}
 
export default Sidebar;