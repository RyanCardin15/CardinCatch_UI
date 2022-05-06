import React, { Component } from 'react';
import CatchItem from "../Catches/catchItem";
import axios from 'axios';
import { Ellipsis } from 'react-spinners-css';
import BarometricPressureItem from './CatchInsights/DataTypes/barometricPressureItem';
export default class Catches extends Component {
    constructor(props) {
        super(props)
        // Set initial state 
        this.state =
        {
            catches: [],
            isLoading: true
        }
        // Binding this keyword 
        this.updateIsLoading = this.updateIsLoading.bind(this)
    }
    updateIsLoading = (loading) => {
        console.log("current" + this.state.isLoading);
        console.log("updating" + loading);
        this.setState({ isLoading: loading });
    }

    componentDidMount() {
        this.updateIsLoading(true);
        axios.get("https://localhost:7212/api/catch/all/1")
            .then(res => {
                console.log("GETTING USERS CATCHES");
                console.log(res);
                this.setState({ catches: res.data });
            });
        this.updateIsLoading(false);
    }
    render() {
        const rowColor = ['#00C4D9;', '#79D7E3'];
        return (
            <div>
                {this.state.isLoading == true && <Ellipsis />}
                {this.state.isLoading == false &&
                    <div className="content">
                        <div>
                            <h2 className="catches-title">My Catches</h2>
                            <div className="table-div">
                                <div className="container-fluid heading-row mt-3">
                                    <div className="row">
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Name</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Size</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Amount</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Date</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Location</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Data</p>
                                        </div>
                                    </div>
                                </div>
                                {this.state.catches.map(
                                    (catches, index) =>
                                        <div>
                                            <CatchItem rowColor={rowColor[index % rowColor.length]} key={catches.catchInfo.catchId} catchId={catches.catchInfo.catchId} updateAppNav={this.props.updateAppNav} updateCatchId={this.props.updateCatchId} Name={catches.catchInfo.name} Size={catches.catchInfo.size} Amount={catches.catchInfo.amount} Date={catches.catchInfo.date} Location={catches.catchInfo.stationId} />
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
