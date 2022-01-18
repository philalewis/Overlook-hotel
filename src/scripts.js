import './css/base.scss';
import './images/turing-logo.png'
import Hotel from '../classes/Hotel';
import domUpdates from './domUpdates';
import {getRoomsData, getCustomersData, getBookingsData, postBooking} from './apiCalls';

let hotel;
let currentUserId = 5;

const getData = () => {
  Promise.all([getRoomsData(), getCustomersData(), getBookingsData()])
  .then(data => {
    hotel = new Hotel(data[0].rooms, data[1].customers, data[2].bookings);
    // hotel.getCustomerInfo(currentUserId);
    // domUpdates.loadCustomerInfo(hotel);
  })
  .catch(err => {
    domUpdates.showError(err)
    console.log('<<<<<<< This is what went wrong >>>>>>>>', err);
  })
};

//************* Query Selectors ****************
const selectDate = document.getElementById('selectDate');
const roomType = document.getElementById('roomType');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const exitErrorMessage = document.getElementById('exitErrorMessage');
const exitNoRoomsButton = document.getElementById('exitNoRoomsButton');
const loginBtn = document.getElementById('loginBtn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const exitLoginErrorButton = document.getElementById('exitLoginErrorButton');

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
loginBtn.addEventListener('click', submitLoginInfo);
exitLoginErrorButton.addEventListener('click', domUpdates.exitModal);

//************* LOGIN ******************/
function submitLoginInfo() {
  let id = '';
  if (validateUsername()) {
    id = getCustomerId();
    console.log(currentUserId)
    if (validatePassword(id)) {
      hotel.getCustomerInfo(id);
      domUpdates.loadCustomerInfo(hotel);
    } else {
      showLoginError();
    }
  } else {
    showLoginError();
  }
}

function validateUsername() {
  const name = username.value;
  return 9 <= name.length <= 10 &&
    name.slice(0, 8) === 'customer' &&
    typeof parseInt(name.slice(8)) === 'number';
}

function getCustomerId() {
  currentUserId = parseInt(username.value.slice(8));
  return parseInt(username.value.slice(8));
}

function validatePassword(id) {
  const user = hotel.customers.find(customer => customer.id === id);
  return password.value === user.password;
}

function showLoginError() {
  username.value = '';
  password.value = '';
  domUpdates.showLoginError();
}

//************** ROOMS AND BOOKINGS ****************/
function loadRooms() {
  hotel.updateSelectedDate(selectDate.value);
  hotel.filterByDate(selectDate.value);
  domUpdates.updateRooms(hotel.filteredRooms);
  addEventListenersToSelectionButtons();
}

function filterRooms() {
  loadRooms()
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
  parseInt(hotel.updateRoomSelection(id));
  domUpdates.showConfirmationMessage();
}

function submitBooking() {
  const postObj = {
    userID: currentUserId,
    date: hotel.selectedDate,
    roomNumber: parseInt(hotel.selectedRoom)
  }
  postBooking(postObj)
  .then(() => {
    getData();
    hotel.getCustomerInfo(currentUserId);
    domUpdates.loadCustomerInfo(hotel);
    addEventListenersToSelectionButtons();
    domUpdates.exitModal();
    domUpdates.hideRoomTypeOption();
  })
  .catch(err => {
    domUpdates.showError(err)
  });
}
