// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import './css/_mixins.scss';
// import './css/_variables.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');
import Hotel from '../classes/Hotel';
// import User from '../classes/User';
// import Customer from '../classes/Customer';
// import Manager from '../classes/Manager';
// import Booking from '../classes/Booking';
// import Room from '../classes/Room';
// import domUpdates from './domUpdates';
import {getRoomsData, getCustomersData, getBookingsData} from './apiCalls';

let hotel;

const getData = () => {
  Promise.all([getRoomsData, getCustomersData, getBookingsData])
  .then(data => {
    hotel = new Hotel(data[0], data[1], data[2]);
    const id = getRandomIndex(hotel.customers);
    hotel.getCustomerInfo(id);
    loadCustomerInfo(id);
  })
  .catch(err => {
    domUpdates.showErrMessage()
    console.log('<<<<<<<This is what went wrong>>>>>>>>', err);
  })
};

const getRandomIndex = array => Math.floor(Math.random() * array.length);


//************* Event Listeners ****************
// window.addEventListener('load', getData);