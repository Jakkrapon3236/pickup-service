import React, { Component } from 'react';
import { longdo, map, LongdoMap } from '../longdo-map/LongdoMap'; // Corrected import path

class App extends Component {
  constructor(props: {}) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  initMap() {
    if (map && longdo) {
      map.Layers.setBase(longdo.Layers.GRAY);
    } else {
      console.error('Map or Longdo is not defined');
    }
  }

  render() {
    const mapKey = '33f7afb9885e9fbd4cc26b96b75dfed3';
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default App;

