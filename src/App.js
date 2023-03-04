import { useState, useEffect } from 'react';
import './App.css';
import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    const url = "https://randomuser.me/api/";
    const res = await axios.get(url);
    setUserData(res?.data?.results[0])
  }
  
  useEffect(() => {
    fetchUserData();
  }, [])

  console.log(userData)

  const title = userData?.name?.title;
  const firstName = userData?.name?.first;
  const lastName = userData?.name?.last;
  const email = userData?.email;
  const city = userData?.location?.city;
  const country = userData?.location?.country;
  const phone = userData?.phone;
  const age = userData?.dob?.age;
  const reg = userData?.registered?.date;

  const slicedDate = reg?.slice(0, 10);

  return (
    <div className="App">
      <div className="randomContainer">
        <div className="userHeader">
          <img alt="something" src={userData?.picture?.medium} />
          <h2>{title} {firstName} {lastName}</h2>

          <div className="userDetails">
          {/* <p>Age: 75</p>
          <p>Contact: {[email, location, phone]}</p> */}

            <p>{email}</p>
            <p>{city}</p>
            <p>{country}</p>
            <p>{phone}</p>
            <p>{age}</p>
            <p>{slicedDate}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={fetchUserData}>Click for a random user</button>
      </div>
    </div>
  );
}

export default App;
