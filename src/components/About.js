import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h5 className="mt-bottom">
                            <strong>About Me</strong>
                        </h5>
                        <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="card-action">
                        <h5>
                            <strong>PERSONAL INFO</strong>
                        </h5>
                        <div className="row mt">
                            <div className="col s12 m6 l6 xl6">
                                <p><strong>Address:</strong> 123 Lorem</p>
                                <p><strong>Email:</strong> test@gmail.com</p>
                                <p><strong>Phone:</strong> 123456789</p>
                            </div>
                            <div className="s12 m6 l6 xl6">
                                <p><strong>Main Language:</strong> English</p>
                                <p><strong>Second Language:</strong> German</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;