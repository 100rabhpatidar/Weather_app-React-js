import React, {useCallback, useEffect,useState} from 'react'

const Weathercard = ({tempInfo}) => {
const [weatherState, setWeatherState] = React.useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        
        
      } = tempInfo;

const [currentDateTime, setcurrentDateTime] = useState(" ");

 


      useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;

                case "Haze":
                        setWeatherState("wi-fog");
                        break;

                case "Clear":
                            setWeatherState("wi-day-sunny");
                            break;

                case "Mist":
                                setWeatherState("wi-dust");
                                break;

                 case "Smoke":
                                setWeatherState("wi-smoke");
                                break;

                 case "Snow":
                                  setWeatherState("wi-snow");
                                  break;
            
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
        
      }, [weathermood]);

      //converting sec to time

      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours()}:${date.getMinutes()}`

      // Create a new Date object
var currentDate = new Date();

// Get individual components of the date and time
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Note: Months are zero-based, so add 1
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();


// Display the current date and time

 let datetime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

 //setcurrentDateTime(datetime);

 useEffect(() => {
       setTimeout(() => {
        setcurrentDateTime(datetime)
       }, 1000);
}, [datetime]); 
 
    
  return (
    <>
      {/* our temp card*/}

      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>

          <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'>{name},{country}</div>

          </div>

        </div>

        <div className='date'>{currentDateTime}</div>

        {/*our 4 coloumn section */}

        <div className='extra-temp'>
          <div className='temp-info-minmax'>

            <div className='two-sided-section'>
              <p>
                <i className='wi wi-sunset'></i>
              </p>

              <p className='extra-info-leftside'>
              {timeStr} PM <br/> Sunset

              </p>

            </div>

            <div className='two-sided-section'>
              <p>
                <i className='wi wi-humidity'></i>
              </p>

              <p className='extra-info-leftside'>
                {humidity} <br/> humidity

              </p>

            </div>

          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className='wi wi-rain'></i>
              </p>

              <p className='extra-info-leftside'>
                {pressure} <br/> pressure

              </p>

            </div>

            <div className='two-sided-section'>
              <p>
                <i className='wi wi-strong-wind'></i>
              </p>

              <p className='extra-info-leftside'>
                {speed} <br/> speed

              </p>

            </div>

          </div>

        </div>
        <div className='name-container'>
        <h6 className='developer-heading'>Develop by Souurabh Patidar</h6>
        </div>

      </article>

     
    </>
  )
}

export default Weathercard
