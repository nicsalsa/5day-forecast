import React, { Component } from 'react';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      city: "Vancouver",
      dates: []
    }
  }

  componentDidMount() {
    //constants
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;
    // api get request
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          forecast: data,
          dates: [...new Set(data.list.map((reading) => reading.dt_txt))]
        })
      })
      .catch((error) => console.log(error));
  
  //   const setDates = () => {
  //   if (this.state.forecast.length) {
  //     const dates = this.state.forecast.list.map((reading) => reading.dt_txt);
  //     const uniqueDates = [...new Set(dates)];
  //     return this.setState({
  //       dates: uniqueDates
  //     });
  //   }
  //   };
  //   setDates();
  };


    
    
  render() {   
    // this.setDates();
    console.log("dates", this.state.dates)
    return (
      <ul>
        yoo
        {/* {this.state.forecast.list.map((reading) => {
          const dates = 
          return <li>{date}</li>;
        })} */}
      </ul>
    )
  }
}

export default Forecast;