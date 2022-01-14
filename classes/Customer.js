import User from './User';
import Booking from './Booking';

class Customer extends User {
  constructor(user, bookings) {
    super(user);
    this.bookings = bookings ? this.populateBookings(bookings) : [];
    this.totalSpent = this.calculateTotalSpent();
    this.type = 'customer';
  }

  populateBookings(bookings) {
    const list = [];
    bookings.forEach(booking => {
      booking.userID === this.id ? list.push(new Booking(booking)) : null;
    });
    return list;
  }

  calculateTotalSpent() {
    return this.bookings.reduce((acc, booking) => {
      acc += booking
      return acc;
    }, 0)
  }
}

export default Customer;