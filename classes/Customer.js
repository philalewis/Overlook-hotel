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
    return bookings.filter(booking => booking.userId === this.id);
  }

  calculateTotalSpent() {
    return this.bookings.reduce((acc, booking) => {
      acc += booking
      return acc;
    }, 0)
  }
}

export default Customer;