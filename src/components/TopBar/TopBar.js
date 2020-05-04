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
                <Link to='/'><img src={logo} alt='logo' /></Link>
                <li><Link to='/'><i className="fas fa-home"></i> Home</Link></li>
                <li><Link to='/contact-us'><i className="fas fa-comments"></i> Contact us</Link></li>

                {
                !isAuthorized && (
                    <>
                    <li><Link to='/register'><i className="fas fa-sign-in-alt"></i> Register</Link></li>
                    <input type="button" value="Login" className="btn btn-primary" onClick={this.handleClick}/>
                    </>
                    )
                }

                {
                isAuthorized && (
                    <>
                    <li><Link to="/add-hotel"><i className="fas fa-plus-circle"></i> Add hotel</Link></li>
                    <li><Link to="/my-hotels"><i class="fas fa-building"></i> My hotels</Link></li>
                    <input type="button" value="Logout" className="btn btn-outline-primary" onClick={this.handleLogoutClick} />
                    <div className="user-profile"><i className="fas fa-user"></i> user: {user.username}</div>
                    </>
                    )
                }
                    </ul> 
            </nav>
         );
    }
}
 
export default withRouter(TopBar);