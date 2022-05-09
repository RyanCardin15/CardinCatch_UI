import React, { Component } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default class CatchItem extends Component {
    updateCatchState() {
        this.props.updateAppNav("catchInsights");
        this.props.updateCatchId(this.props.catchId);
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.props.rowColor }} className="container-fluid content-row-colored pt-4">
                    <div className="row" onClick={() => this.updateCatchState()}>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Name}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Size}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Amount}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Date}</p>
                        </div>
                        <div className="col-4 col-xs-4 col-md-3 col-lg-2 col-xl-2">
                            <p className="table-content">{this.props.Location}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}