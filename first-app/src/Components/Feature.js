import {Link} from "react-router-dom";
import React from 'react';
import './Feature.css';

class Feature extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feature1: 'feature',
        };
    }
    render() {
        return (
            <div className='feature-container-wrapper'>
                <h4>Feature</h4>
                <div className='feature-container'>
                    <div className='feature'>
                       <Link to="/transfer"><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></Link>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                    <div className='feature'>
                         <a href='/Pages/Feature/Transfer.js'><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></a>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                    <div className='feature'>
                         <a href=''><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></a>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                    <div className='feature'>
                         <a href=''><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></a>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                    <div className='feature'>
                         <a href=''><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></a>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                    <div className='feature'>
                         <a href=''><img className='feature-icon' src={require('../Assets/icons8-back-48.png')} alt=''></img></a>
                        <h6 className='feature-name'>{this.state.feature1}</h6>
                    </div>
                </div>
            </div>
        );
    }
}



export default Feature;