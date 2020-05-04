import React from 'react';
import './LoginView.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoginView extends React.Component {

    login = (event) => {
        event.preventDefault();
    
        const form = new FormData(event.target);
    
        // for (let field of form) {
        //     console.log(field);
        // }
    
        const url = 'https://nodejs-mysql-it-academy.herokuapp.com/';
        const options = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
    
        axios.post(url + 'login', form, options)
        .then(response => {
            localStorage.setItem('token', response.data.accessToken)
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error)
        })
    
    }

    render() { 
        return ( 
            <div className="form">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <div className="form-group">
                        <label>Username:<input type="text" name="username" className="form-control" placeholder="Your username" required /></label>
                    </div>
                    <div className="form-group">
                        <label>Password:<input type="password" name="password" className="form-control" placeholder="********" required /></label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         )
    }
}
 
export default withRouter(LoginView);