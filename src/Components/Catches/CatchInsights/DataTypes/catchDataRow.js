import React, { Component } from 'react';

export default class CatchDataRow extends Component
{
    render(){
        return(
            <div style={{ backgroundColor: this.props.rowColor }} className="container-fluid content-row-colored pt-4">
                    <div className="row">
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Data}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Time}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.DataPoint}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Change}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Location}</p>
                        </div>
                    </div>
                </div>
        );
    }
}