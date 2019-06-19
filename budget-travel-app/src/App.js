import React from 'react';
//import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div class="gtco-container">
			
    <div class="row">
      <div class="col-sm-4 col-xs-12">
        <div id="gtco-logo"><a href="index.html">Insider Traveler <em>.</em></a></div>
      </div>
      <div class="col-xs-8 text-right menu-1">
        <ul>
          <li><a href="destination.html">Destination</a></li>
          <li class="has-dropdown">
            <a href="#">Travel</a>
            <ul class="dropdown">
              <li><a href="">Europe</a></li>
              <li><a href="#">Asia</a></li>
              <li><a href="#">America</a></li>
              <li><a href="#">Canada</a></li>
            </ul>
          </li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>	
      </div>
    </div>
    
  </div>
  );
}

export default App;
