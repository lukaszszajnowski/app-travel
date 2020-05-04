import React from 'react';
import './ContactUsView.scss';
import { withRouter } from 'react-router-dom';

class ContactUsView extends React.Component {

    render() { 
        return ( 
            <div className="form">
                <h1>Contact us</h1>
                <form>
                    <div className="form-group">
                        <label>Name:<input type="text" name="name" className="form-control" placeholder="Your name" required /></label>
                    </div>
                    <div className="form-group">
                        <label>E-mail:<input type="email" name="email" className="form-control" placeholder="name@example.com" required /></label>
                    </div>
                    <div className="form-group">
                        <label>Massage:<textarea name="massage" className="form-control area-msg" placeholder="Your massage"></textarea></label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}

export default withRouter(ContactUsView);