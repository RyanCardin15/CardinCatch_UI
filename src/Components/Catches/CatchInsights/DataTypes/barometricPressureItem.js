import React, { Component } from 'react';
import DataItem from './dataItem';

export default class BarometricPressureItem extends Component
{
    render(){
        return(
            <div>
                <div className="content">
                        <div>
                            <h2 className="catches-title">Barometric Pressure</h2>
                            <div className="table-div">
                                <div className="container-fluid heading-row mt-3">
                                    <div className="row">
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Date</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Time</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Pressure</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Change</p>
                                        </div>
                                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                                            <p className="table-headings">Location</p>
                                        </div>
                                    </div>
                                </div>
                                        <div>
                                            <DataItem key={this.props.key} catchId={this.props.catchId} updateAppNav={this.props.updateAppNav} updateCatchId={this.props.updateCatchId} Data={this.props.Data}/>
                                        </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}