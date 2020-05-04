import React from 'react';
import './RegisterView.scss';
import axios from 'axios';

class RegisterView extends React.Component {
    
register = (event) => {
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

    axios.post(url + 'register', form, options)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })

}

    render() { 
        return ( 
            <div className="form">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <div className="form-group">
                        <label>Username:<input type="text" className="form-control" name="username" placeholder="Your name" required /></label>
                    </div>
                    <div className="form-group">
                        <label>E-mail:<input type="email" className="form-control" name="email" placeholder="name@example.com" required /></label>
                    </div>
                    <div className="form-group">
                        <label>Password:<input type="password" className="form-control" name="password" placeholder="********" required /></label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         )
    }
}
 
export default RegisterView;