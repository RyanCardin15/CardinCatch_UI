import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CatchDataRow from './catchDataRow';

export default class DataItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.Data)
        return (
            <div>
                {this.props.Data?.changes?.map(
                    (changes, index) =>
                        <div>
                            <CatchDataRow key={this.props.CatchData?.catchInfo?.catchId} catchId={this.props.CatchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} updateCatchId={this.props.updateCatchId} Date={changes?.before?.time} Time={changes?.before?.time} DataPoint={changes?.before?.dataPoint} Change={changes?.difference} Rank={changes?.rank} />
                        </div>
                )}
            </div>
        );
    }
}