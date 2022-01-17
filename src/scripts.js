import './css/base.scss';
import './images/turing-logo.png'
import Hotel from '../classes/Hotel';
import domUpdates from './domUpdates';
import {getRoomsData, getCustomersData, getBookingsData, postBooking} from './apiCalls';

let hotel;
const currentUserId = 5;

const getData = () => {
  Promise.all([getRoomsData(), getCustomersData(), getBookingsData()])
  .then(data => {
    hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
    hotel.getCustomerInfo(currentUserId);
    domUpdates.loadCustomerInfo(hotel);
  })
  .catch(err => {
    domUpdates.showError(err)
    console.log('<<<<<<< This is what went wrong >>>>>>>>', err);
  })
};

// const getRandomIndex = array => Math.floor(Math.random() * array.length);

//************* Query Selectors ****************
const selectDate = document.getElementById('selectDate');
const roomType = document.getElementById('roomType');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const exitErrorMessage = document.getElementById('exitErrorMessage');
const exitNoRoomsButton = document.getElementById('exitNoRoomsButton');

//************* Event Listeners ****************
window.addEventListener('load', getData);
selectDate.addEventListener('change', loadRooms);
roomType.addEventListener('input', filterRooms);
no.addEventListener('click', domUpdates.exitModal);
yes.addEventListener('click', submitBooking);
exitErrorMessage.addEventListener('click', domUpdates.exitModal);
exitNoRoomsButton.addEventListener('click', () => {
  return domUpdates.exitNoRooms(hotel)
});

function loadRooms() {
  hotel.updateSelectedDate(selectDate.value);
  hotel.filterByDate(selectDate.value);
  domUpdates.updateRooms(hotel.filteredRooms);
  addEventListenersToSelectionButtons();
}

function filterRooms() {
  hotel.filterRooms('type', roomType.value);
  domUpdates.updateRooms(hotel.filteredRooms);
  addEventListenersToSelectionButtons();
}

function addEventListenersToSelectionButtons() {
  const selectRoomButtons = document.querySelectorAll('.select-room');
  selectRoomButtons.forEach(button => {
    button.addEventListener('click', showConfirmationMessage);
  });
}

function showConfirmationMessage(event) {
  const id = event.target.id.slice(4);
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
    getData();
    domUpdates.exitModal();
  })
  .catch(err => {
    domUpdates.showError(err)
  });
}
