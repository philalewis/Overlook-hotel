import './css/base.scss';
import './images/turing-logo.png'
import Hotel from '../classes/Hotel';
import domUpdates from './domUpdates';
import {getRoomsData, getCustomersData, getBookingsData} from './apiCalls';

let hotel;

const getData = () => {
  Promise.all([getRoomsData, getCustomersData, getBookingsData])
  .then(data => {
    hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
    const id = getRandomIndex(hotel.customers);
    hotel.getCustomerInfo(id);
    console.log(hotel.currentCustomer)
    domUpdates.loadCustomerInfo(hotel);
  })
  .catch(err => {
    // domUpdates.showErrMessage()
    console.log('<<<<<<<This is what went wrong>>>>>>>>', err);
  })
};

const getRandomIndex = array => Math.floor(Math.random() * array.length);


//************* Event Listeners ****************
window.addEventListener('load', getData);