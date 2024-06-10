import React from 'react';
import { ISSData } from "../types/ISSData";

interface IISSLocationState {
  latitude: number;
  longitude: number;
  loading: boolean;
  error: string | null;
}

class ISSLocationComponent extends React.Component<{}, IISSLocationState> {
  state: IISSLocationState = {
    latitude: 0,
    longitude: 0,
    loading: true,
    error: null
  };

  componentDidMount() {
    this.fetchISSLocation();
  }

  updateLocation = () => {
    this.fetchISSLocation();
  }

  fetchISSLocation() {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => {
        // 如果網絡請求失敗，response.ok 會是 false，一個簡單的判斷來確定請求是否成功
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: ISSData) => {
        // 記得 API 回傳的經緯度是字串，要轉成數字，用 parseFloat(字串) 來轉換
        this.setState({
          // Your code here



          // End of your code
        });
      })
      .catch(error => {
        // 不論加載數據失敗還是解析數據失敗，都會在這裡被捕獲，記得要把 loading 設為 false
        this.setState({
          // Your code here


          // End of your code
        });
      });
  }

  render() {
    const { latitude, longitude, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h1>Current ISS Location</h1>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>

        <button onClick={this.updateLocation}>Update Location</button>
      </div>
    );
  }
}

export default ISSLocationComponent;
