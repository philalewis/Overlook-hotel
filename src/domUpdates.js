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
    // console.log(Object.keys(hotel.currentCustomer.bookings))
    this.loadCustomerBookings(hotel);
    totalSpent.innerText = `Total Amount Spent: $${hotel
      .calculateCustomerExpenses(hotel.currentCustomer.id)}`;
    show([bookingOptions, bookings]);
    hide([loginPage]);
  },

  loadCustomerBookings(hotel) {
    console.log(hotel)
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
              .currentRoom.price.toFixed(2)}</b></h4>
            <p class="confirmation-num">Confirmation Number: ${booking
              .id}</p>
          </section>
        </section>
      </section>`
    })
  }
}

export default domUpdates;