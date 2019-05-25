import React, { Component } from 'react';
import Options from './Options';

export default class Features extends Component {
    render() {
        const features = Object.keys(this.props.features)
        .map(key => {
          const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;

          return (
          <Options
          featureName={this.props.features.name} 
          featureClass={featureClass} 
          updateFeature={this.props.updateFeature} 
          key={`${index}_${key}`} 
          item={item} 
          index={index} />
          )});

          return (
            <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
            )
        });   
        return (
            <div>
                {features}
            </div>
        )
    }
}