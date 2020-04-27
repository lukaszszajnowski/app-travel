import React from 'react';
import './TopBar.scss';
import logo from './logo.png'
import { Link, withRouter} from 'react-router-dom';


class TopBar extends React.Component {
    
    handleClick = () => {
        this.props.history.push('/login');
    }

    render() { 
        return ( 
            <nav className="top-bar-navi">
                <ul>
                <li><img src={logo} alt='logo' /></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact-us'>Contact us</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><input type="button" value="Login" className="btn btn-primary" onClick={this.handleClick}/></li>
                </ul> 
            </nav>
         );
    }
}
 
export default withRouter(TopBar);