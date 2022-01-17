const totalSpent = document.getElementById('totalSpent');
const loginPage = document.getElementById('loginPage');
const bookingOptions = document.getElementById('bookingOptions');
const selectRoomType = document.getElementById('selectRoomType');
const bookings = document.getElementById('bookings');
const rooms = document.getElementById('rooms');
const confirmBookingBox = document.getElementById('confirmBookingBox');
const modal = document.getElementById('modal');
const errorMessage = document.getElementById('errorMessage');
const errorBox = document.getElementById('errorBox');
const noRooms = document.getElementById('noRooms');
const selectDate = document.getElementById('selectDate');

const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));
const capitalize = string => {
  const array = string.split(' ');
  return array.map(el => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  }).join(' ');
}

const domUpdates = {
  // showLoginPage() {

  // },

  loadCustomerInfo(hotel) {
    this.loadCustomerBookings(hotel);
    totalSpent.innerText = `Total Amount Spent: $${hotel
      .calculateCustomerExpenses(hotel.currentCustomer.id)}`;
    selectDate.value = '';
    show([bookingOptions, bookings]);
    hide([loginPage, rooms]);
  },
  
  loadCustomerBookings(hotel) {
    bookings.innerHTML = '';
    hotel.currentCustomer.bookings.forEach(booking => {
      bookings.innerHTML += `
      <section class="booking" id="">
        <h4>${booking.date}</h4>
        <section class="booking-info">
          <section class="left-side">
            <p class="room-number">Room Number: ${booking.roomNumber}</p>
            <p class="room-type">Type: ${capitalize(booking.currentRoom.type)}</p>
            <p class="bed-size">Bed: ${capitalize(booking.currentRoom.bedSize)}</p>
            <p class="num-beds">Number of Beds: ${booking
              .currentRoom.numBeds}</p>
          </section>
          <section class="right-side">
            <h4 class="cost"><b>$${booking
              .currentRoom.cost.toFixed(2)}</b></h4>
            <p class="confirmation-num">Confirmation Number: ${booking
              .id}</p>
          </section>
        </section>
      </section>`
    })
  },

  updateRooms(roomData) {
    roomData.length === 0 ?
      this.showNoRoomMessage() :
      this.loadRooms(roomData);
    show([rooms, selectRoomType]);
    hide([bookings]);
  },

  loadRooms(roomData) {
    rooms.innerHTML = '';
    roomData.forEach(room => {
      rooms.innerHTML += `
      <section class="room">
        <section class="room-info">
          <section class="left-side">
            <p class="room-number">Room Number: ${room.number}</p>
            <p class="room-type">Type: ${capitalize(room.type)}</p>
            <p class="bed-size">Bed: ${capitalize(room.bedSize)}</p>
            <p class="num-beds">Number of Beds: ${room.numBeds}</p>
            <p class="bidet">Bidet: ${room.bidet ? 'Yes' : 'No'}</p>
          </section>
          <section class="right-side">
            <h3 class="cost"><b>$${room.cost}</b></h3>
            <button class="select-room" id="room${room.number}">SELECT</button>
          </section>
        </section>
      </section>`
    });
  },

  showConfirmationMessage() {
    show([modal, confirmBookingBox]);
  },

  exitModal() {
    hide([modal, confirmBookingBox, errorBox, noRooms]);
  },

  showError(error) {
    console.log(error)
    errorMessage.innerText = error.message;
    show([modal, errorBox]);
    hide([confirmBookingBox]);
  },

  showNoRoomMessage() {
    show([modal, noRooms]);
  },

  exitNoRooms(hotel) {
    hide([modal, noRooms]);
    this.loadCustomerInfo(hotel);
  }
}

export default domUpdates;