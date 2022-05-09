import React from 'react-dom';
import './App.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.png';

function App() {
  return (
    <div className="background">
        <h1>Politics</h1>

        <div className="row">
          <div className="col-md-6 col-lg-4">
              <div className="image1">
              <img className="img-fluid" src= {img1}  alt="Donald Trump"></img>
              <div className="image-text">
              <h2>Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus'</h2>
              <p>Jonnathan Doe</p>
            </div>
          </div>
        </div>

          <div className="col-md-6 col-lg-4">
              <div className="card image2">
              <img src= { img2 } alt="Jenny Lawson"></img>
              <h2>Jenny Lawson Is Publishing a New Book and It's Sort of a Coloring Book</h2>
              <div className="containers">
              <p>Jonnathan Doe</p>
              </div>  </div>
              <div className="card container">
              <h2>Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service</h2>
              <p>Alice Doe</p>
              </div>
          </div>

          <div className="col-lg-4">
              <h2 >Airtel Offers 3 GB Free Data A Month To Customers Who Switch To Its 4G Service</h2>
              <p>Alex Parkinson</p>
              <div className="break"></div>
              <h2>Warning Letter for Ankleshwar Plant Sends Wockhardt Shares To Near 2.5 Year Low</h2>
              <p>Alex Parkinson</p>
              <div className="break"></div>
              <h2>Sundar Pichai Launches 'Digital Unlocked' Programme</h2>
              <p>Jonnathan Doe</p>
              <div className="break"></div>
              <h2>Warning Letter for Ankleshwar Plant Sends Wockhardt Shares To Near 2.5-Year Low
              </h2>
              <p>Alex Parkinson</p>
           </div>  

    </div>
    </div>
  );
}

export default App;
