import './css/base.scss';
import './images/turing-logo.png'
import Hotel from '../classes/Hotel';
import domUpdates from './domUpdates';
import {getRoomsData, getCustomersData, getBookingsData, postBooking} from './apiCalls';

let hotel;

const getData = () => {
  Promise.all([getRoomsData, getCustomersData, getBookingsData])
  .then(data => {
    hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
    const id = getRandomIndex(hotel.customers);
    hotel.getCustomerInfo(id);
    domUpdates.loadCustomerInfo(hotel);
  })
  .catch(err => {
    // domUpdates.showErrMessage()
    console.log('<<<<<<<This is what went wrong>>>>>>>>', err);
  })
};

const getRandomIndex = array => Math.floor(Math.random() * array.length);

//************* Query Selectors ****************
const selectDate = document.getElementById('selectDate');
const roomType = document.getElementById('roomType');
const yes = document.getElementById('yes');
const no = document.getElementById('no');



//************* Event Listeners ****************
window.addEventListener('load', getData);
selectDate.addEventListener('input', loadRooms);
roomType.addEventListener('input', filterRooms);
no.addEventListener('click', domUpdates.exitModal);
yes.addEventListener('click', submitBooking);

function loadRooms() {
  hotel.updateSelectedDate(selectDate.value);
  hotel.filterByDate(selectDate.value);
  domUpdates.updateRooms(hotel.filteredRooms);
  addEventListenersToSelectionButtons();
}

function filterRooms() {
  hotel.filterRooms('type', roomType.value);
  domUpdates.updateRooms(hotel.filteredRooms);
}

function addEventListenersToSelectionButtons() {
  const selectRoomButtons = document.querySelectorAll('.select-room');
  selectRoomButtons.forEach(button => {
    button.addEventListener('click', showConfirmationMessage);
  });
}

function showConfirmationMessage(event) {
  const id = event.target.id.slice(4)
  hotel.updateRoomSelection(id);
  domUpdates.showConfirmationMessage();
}

function submitBooking() {
  const postObj = {
    userID: hotel.currentCustomer.id,
    date: hotel.selectedDate,
    roomNumber: parseInt(hotel.selectedRoom)
  }
  postBooking(postObj)
  .then(data => {
    getBookings();
    domUpdates.exitModal();
  })
  .catch(err => {
    domUpdates.showError(err)
  });
}

function getBookings() {
  getBookingsData
  .then(info => {
    hotel.populateBookings(info.bookings, hotel.rooms);
    domUpdates.loadCustomerInfo(hotel);
  })
  .catch(err => domUpdates.showError(err));
}