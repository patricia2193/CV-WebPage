import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h5>
                            <strong>PROFESSIONAL SKILLS</strong>
                        </h5>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>Java</p>
                                <div class="progress grey-lighten-2">
                                    <div class="determinate blue" style={{width:'70%'}} />
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Selenium</p>
                                <div class="progress grey-lighten-2">
                                    <div class="determinate blue" style={{width:'89%'}} />
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Javascript</p>
                                <div class="progress grey-lighten-2">
                                    <div class="determinate blue" style={{width:'65%'}} />
                                </div>
                            </div>
                            <div className="col s6">
                                <p>HMTL</p>
                                <div class="progress grey-lighten-2">
                                    <div class="determinate blue" style={{width:'55%'}} />
                                </div>
                            </div>
                            <div className="col s6">
                                <p>CSS</p>
                                <div class="progress grey-lighten-2">
                                    <div class="determinate blue" style={{width:'50%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;