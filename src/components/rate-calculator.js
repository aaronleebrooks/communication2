import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dayRate: 300,
          hours: 8
        };
    }

    setDayRate(dayRate) {
        this.setState({
            dayRate
        })
    }

    setHours(hours) {
        this.setState({
            hours
        })
    }

    render() {
        const rate = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput 
                    value={this.state.dayRate}
                    onChange={value => this.setDayRate(value)} 
                    id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput 
                    value={this.state.hours}
                    onChange={value => this.setHours(value)} 
                    id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}/>
            </form>
        );
    }
}

