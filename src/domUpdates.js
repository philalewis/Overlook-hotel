const totalSpent = document.getElementById('totalSpent');
const loginPage = document.getElementById('loginPage');
const bookingOptions = document.getElementById('bookingOptions');
// const dashboard = document.getElementById('dashboard');
const bookings = document.getElementById('bookings');
const rooms = document.getElementById('rooms');

const show = elements => elements.forEach(element => element.classList.remove('hidden'));
const hide = elements => elements.forEach(element => element.classList.add('hidden'));

const domUpdates = {
  loadCustomerInfo(hotel) {
    this.loadCustomerBookings(hotel);
    totalSpent.innerText = `Total Amount Spent: $${hotel
      .calculateCustomerExpenses(hotel.currentCustomer.id)}`;
    show([bookingOptions, bookings]);
    hide([loginPage]);
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
            <p class="room-type">Type: ${booking.currentRoom.type}</p>
            <p class="bed-size">Bed: ${booking.currentRoom.bedSize}</p>
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

  loadRooms(roomData) {
    // console.log(rooms)
    rooms.innerHTML = '';
    roomData.forEach(room => {
      rooms.innerHTML += `
      <section class="room">
        <section class="room-info">
          <section class="left-side">
            <p class="room-number">Room Number: ${room.number}</p>
            <p class="room-type">Type: ${room.type}</p>
            <p class="bed-size">Bed: ${room.bedSize}</p>
            <p class="num-beds">Number of Beds: ${room.numBeds}</p>
            <p class="bidet">Bidet: ${true ? 'Yes' : 'No'}</p>
          </section>
          <section class="right-side">
            <h4 class="cost"><b>$${room.cost}</b></h4>
            <button class="select-room" id="room${room.number}">SELECT</button>
          </section>
        </section>
      </section>`
    })
    show([rooms]);
    hide([bookings])
  }
}

export default domUpdates;