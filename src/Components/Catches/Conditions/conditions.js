import React, { Component } from 'react';
import axios from 'axios';
import BarometricPressureItem from '../CatchInsights/DataTypes/barometricPressureItem';
import AirTemperatureItem from '../CatchInsights/DataTypes/airTemperatureItem';
import WaterTemperatureItem from '../CatchInsights/DataTypes/waterTemperatureItem';
import VisibilityItem from '../CatchInsights/DataTypes/visibilityItem';
import HumidityItem from '../CatchInsights/DataTypes/humidityItem';

export default class Conditions extends Component {
    constructor(props) {
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
        axios.get("https://localhost:7212/api/conditions/2022-05-07/station/8775792")
            .then(res => {
                console.log("GETTING USERS CATCHES");
                console.log(res);
                this.updateCatches(res.data);
            });
    }

    render() {
        const rowColor = ['#00C4D9;', '#79D7E3'];
        return (
            <div>
                <BarometricPressureItem Key={this.state.catchData?.catchInfo?.catchId} Data={this.state.catchData?.barometricPressureModel} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} CatchData={this.state.catchData} />
                <AirTemperatureItem Key={this.state.catchData?.catchInfo?.catchId} Data={this.state.catchData?.airTemperatureModel} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} CatchData={this.state.catchData} />
                <WaterTemperatureItem Key={this.state.catchData?.catchInfo?.catchId} Data={this.state.catchData?.waterTemperatureModel} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} CatchData={this.state.catchData} />
                <VisibilityItem Key={this.state.catchData?.catchInfo?.catchId} Data={this.state.catchData?.visibility} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} CatchData={this.state.catchData} />
                <HumidityItem Key={this.state.catchData?.catchInfo?.catchId} Data={this.state.catchData?.humidity} catchId={this.state.catchData?.catchInfo?.catchId} updateAppNav={this.props.updateAppNav} CatchData={this.state.catchData} />
            </div>
        );
    }
}