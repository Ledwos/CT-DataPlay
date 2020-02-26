import React, { Component } from 'react';

export default class ElecFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {elecResults: null};
    }

    getData = () => {
        fetch('https://demo.staging.energyhelpline-aws.com/api/results/a8823b4b-1abe-41de-a5b3-ab6700c08d98')
        .then(results => results.json())
        .then(data => this.setState({elecResults: data}));
    };


    componentDidMount = () => {
        // add fetch here
        this.getData();
    }
    
    render() {
        console.log(this.state.elecResults);
        return (
            <div>
                <p>This component is ElecFetch!</p>
                {/* {this.state.elecResults === null ? <p> waiting for fetch</p> : <p>supplyDetailsId - {this.state.elecResults['elecResults'][0]['supplyDetailsId']} | Expected Monthly Spend - {this.state.elecResults['elecResults'][0]['expectedMonthlySpend']}</p>} */}
                {this.state.elecResults === null ? <p> waiting for fetch</p> : this.state.elecResults['elecResults'].map(x =>  <p>supplyDetailsId - {x['supplyDetailsId']} | Expected Monthly Spend - {x['expectedMonthlySpend']}</p>)}
                {/* ^very long and messy looking */}
                {/* conveniently returns in order of lowest to highest though shouldn't rely on the data and should sort it myself */}
                
            </div>
        )
    }
}


