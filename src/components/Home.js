import React, { Component } from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Navbar from './Navbar';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Portfolio from './Portfolio';

class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Experience />
                            <Education />
                            <Portfolio />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;