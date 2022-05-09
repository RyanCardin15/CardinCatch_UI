import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <p>Cardin Catch</p>
                </div>
                <a onClick={() => this.props.setAppNav("catches")} href="#home">My Catches</a>
                <a href="#news">Log Catch</a>
                <a href="#contact">Predictions</a>
                <a onClick={() => this.props.setAppNav("conditions")} href="#about">Conditions</a>
            </div>
        );
    }
}