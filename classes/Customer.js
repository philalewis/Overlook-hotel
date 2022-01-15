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
    return bookings.map(booking => new Booking(booking));
  }

  calculateTotalSpent() {
    return this.bookings.reduce((acc, booking) => {
      acc += booking
      return acc;
    }, 0)
  }
}

export default Customer;