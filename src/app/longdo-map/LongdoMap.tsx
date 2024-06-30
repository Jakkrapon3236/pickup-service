import React, { Component } from 'react';
import PropTypes from 'prop-types';

declare global {
  interface Window {
    longdo: any;
  }
}

export let longdo: any;
export let map: any;

interface State {
  currentPosition: {
    latitude: number;
    longitude: number;
  } | null;
}

interface Props {
  id: string;
  mapKey: string;
  callback?: () => void;
}

export class LongdoMap extends Component<Props, State> {
  static propTypes: { id: PropTypes.Validator<string>; mapKey: PropTypes.Validator<string>; callback: PropTypes.Requireable<(...args: any[]) => any>; };
  constructor(props: Props) {
    super(props);
    this.mapCallback = this.mapCallback.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  
    this.state = {
      currentPosition: null,
    };
  }

  mapCallback() {
    longdo = window.longdo;
    if (longdo && longdo.Map) {
      map = new longdo.Map({
        placeholder: document.getElementById(this.props.id),
        language: 'th',
      });

      // ตั้งค่า placeholder สำหรับผลลัพธ์
      map.Route.placeholder(document.getElementById('result'));

      // ตำแหน่งปัจจุบันของผู้ใช้
      const { currentPosition } = this.state;
      if (currentPosition) {
        map.Route.add(new longdo.Marker({
          lon: currentPosition.longitude,
          lat: currentPosition.latitude,
        }, {
          title: 'คุณอยู่ที่นี่',
          detail: 'ตำแหน่งปัจจุบันของคุณ',
        }));
      }
      map.Route.add(new longdo.Marker({ lon: 99.5026334748103, lat:16.47879157738708 },
        {
          title: 'Victory monument',
          detail: 'I\'m here'
        }
      ));
      
      map.Route.add(new longdo.Marker({ lon: 99.50257983062549, lat:16.48019076032687 },
        {
          title: 'Victory monument',
          detail: 'I\'m here'
        }
      ));
      // ค้นหาเส้นทาง
      map.Route.search();

      // เรียก callback หากมีการกำหนด
      if (this.props.callback) this.props.callback();
    } else {
      console.error('Longdo Map script not loaded correctly.');
    }
  }

  componentDidMount() {
    const existingScript = document.getElementById('longdoMapScript');
    const { mapKey } = this.props;

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://api.longdo.com/map/?key=${mapKey}`;
      script.id = 'longdoMapScript';
      document.body.appendChild(script);

      script.onload = this.mapCallback;
      script.onerror = () => {
        console.error('Failed to load Longdo Map script.');
      };
    } else {
      this.mapCallback();
    }

    // เรียกใช้งานตำแหน่งปัจจุบันของผู้ใช้
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            currentPosition: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
        },
        error => {
          console.error('Error getting current position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  render() {
    return (
      <div style={{ height: '100%', position: 'relative' }}>
        <div id={this.props.id} style={{ width: '100%', height: '100vh' }}></div>
        <div id="result" style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '20%',
          height: '80%',
          margin: 'auto',
          border: '4px solid #dddddd',
          background: '#ffffff',
          overflow: 'auto',
          zIndex: 2
        }}></div>
      </div>
    );
  }
}

LongdoMap.propTypes = {
  id: PropTypes.string.isRequired,
  mapKey: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
