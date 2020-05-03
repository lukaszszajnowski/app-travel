import React from 'react';
import './TopBar.scss';
import logo from './logo.png'
import { Link, withRouter} from 'react-router-dom';


class TopBar extends React.Component {
    handleClick = () => {
      this.props.history.push('/login');
    };
  
    handleLogoutClick = () => {
      localStorage.removeItem('token');
      this.props.verifyUserStatus();
    }

    render() { 
        const { isAuthorized, user } = this.props;

        return ( 
            <nav className="top-bar-navi">
                <ul>
                <li><img src={logo} alt='logo' /></li>
                <li><Link to='/'>Home</Link></li>

                {
                !isAuthorized && (
                    <div>
                    <li><Link to='/register'>Register</Link></li>
                    <li><input type="button" value="Login" className="btn btn-primary" onClick={this.handleClick}/></li>
                    </div>
                    )
                }

                {
                isAuthorized && (
                    <div>
                    <li><Link to='/contact-us'>Contact us</Link></li>
                    <Link to="/add-hotel">Add hotels</Link>
                    <input type="button" value="Logout" onClick={this.handleLogoutClick} />
                    <div className="user-profile">{user.username}</div>
                    </div>
                    )
                }
                    </ul> 
            </nav>
         );
    }
}
 
export default withRouter(TopBar);