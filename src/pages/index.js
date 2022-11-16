
import React, { useState } from 'react'


const IndexPage = (props) => {

  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  let cities = ['Seatle', 'Detroit', 'Honolulu'];

  const [city, setCity] = useState('');
  const [minimum, setMinimum] = useState('');
  const [maximum, setMaximum] = useState('');
  const [average, setAverage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  function randomCustomers(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // prototype method inherits from constructor ShopData
  function calcCookies(){
    for (let i = 0; i < 9; i++){
      this.cookiesPerHour.push (Math.ceil(randomCustomers(this.maxCust, this.minCust) * this.avgCookieSale));
      this.totalCookies += this.cookiesPerHour[i];
  
    }
  };
  

  // const handleChange = (event) => {
  //   setCity({value: event.target.value});
  // }
  console.log('min', minimum);


  return (
    <>

      <main>
        <h1>COOKIES</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)} />
          <p>{city}</p>
          <br />
          <label htmlFor="minimum">Minimum:</label>
          <input
            id="minimum"
            type="number"
            value={minimum}
            onChange={(e) => setMinimum(e.target.value)}

          />
          <br />
          <label htmlFor="maximum">Maximum:</label>
          <input
            id="maximum"
            type="number"
            value={maximum}
            onChange={(e) => setMaximum(e.target.value)}
          />
          <br />
          <label htmlFor="average">Average:</label>
          <input
            id="average"
            type="number"
            value={average}
            onChange={(e) => setAverage(e.target.value)}

          />
          <br />
          <button type="submit">SUBMIT</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>7am</th>
              <th>8am</th>
              <th>9am</th>
              <th>10am</th>
              <th>11am</th>
              <th>12pm</th>
              <th>1pm</th>
              <th>2pm</th>
              <th>3pm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seattle</td>
              <td>58</td>
              <td>24</td>
            </tr>
            <tr>
              <td>Detroit</td>
              <td>54</td>
              <td>64</td>
            </tr>
            <tr>
              <td>Honolulu</td>
              <td>78</td>
              <td>24</td>
            </tr>
          </tbody>
        </table>

        {/* <table>
          {
            hours.map((hour, index) => (
              <thead key={`hour-${index}`}>                  
                  <tr colSpan="1" rowSpan="1">{hour}</tr> 
              </thead>
              
            ))
          }

          { 
            cities.map((city, index) => (
              <thead key={`hour-${index}`}>
                  <tr>
                  <th colSpan="1" rowSpan="1">{city}</th> 
                  </tr>
              </thead>
            ))
          }

          <tbody>
            <tr>
              <td colSpan="2" rowSpan="1"><p>{city}</p></td>
              <td colSpan="1" rowSpan="1"><p>{average}</p></td>
            </tr>
            <tr>
              <td colSpan="1" rowSpan="1"><p>{maximum}</p></td>
            </tr>
          </tbody>
        </table> */}

      </main>

    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>