import React, { Component } from 'react';
import axios from 'axios';
import CatchItem from '../catchItem';

export default class CatchInsights extends Component {
    constructor(props){ 
        super(props) 
        // Set initial state 
        this.state =
        {
          catchData: {}
        }
        // Binding this keyword 
        this.updateCatches = this.updateCatches.bind(this)  
      } 
      updateCatches = (newtext) => {
        this.setState({ catchData: newtext });
      }

    componentDidMount() {
        console.log(this.props.catchId)
        axios.get("https://localhost:7212/api/catch/" + this.props.catchId)
            .then(res => {
                console.log("GETTING USERS CATCHES");
                console.log(res);
                this.updateCatches(res.data);
            });
        }

    render() {
        const rowColor = ['#00C4D9;','#79D7E3'];
        const catchTest = this.state.catchData;
        return (
            <div className="content">
                <h2 className="catches-title">Catch Information</h2>
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
                    <div>
                        <CatchItem rowColor={rowColor[2 % rowColor.length]} key={this.state.catchData?.catchInfo?.catchId} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} updateCatchId={this.props.updateCatchId} Name={this.state.catchData?.catchInfo?.name} Size={this.state.catchData?.catchInfo?.size} Amount={this.state.catchData?.catchInfo?.amount} Date={this.state.catchData?.catchInfo?.date} Location={this.state.catchData?.catchInfo?.stationId} />
                    </div>
                </div>
            </div>
        );
    }
}