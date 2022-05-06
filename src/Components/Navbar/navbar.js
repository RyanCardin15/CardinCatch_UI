import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <p>Cardin Catch</p>
                </div>
                <a onClick={() => this.props.updateAppNav("catches")} href="#home">My Catches</a>
                <a href="#news">Log Catch</a>
                <a href="#contact">Predictions</a>
                <a href="#about">Conditions</a>
            </div>
        );
    }
}