import React, { Component } from 'react';
import Heading from './Heading/Heading'
import MainForm from './MainForm/MainFom'
import MainSummary from './MainSummary/MainSummary'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
            

    return (
      <div className="App">
        <Heading />
        <main>
          <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <MainForm
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />
          </section>
          <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            <MainSummary
              selected={this.state.selected}
            />
            
          </section>
        </main>
      </div>
    );
  }
}

export default App;