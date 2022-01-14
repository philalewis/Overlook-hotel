import User from './User';
import Booking from './Booking'

class Manager extends User {
  constructor(user, bookings) {
    super(user);
    this.type = 'manager';
    this.bookings = this.getBookings(bookings);
  }

  getBookings(bookings) {
    return bookings ? bookings.map(booking => new Booking(booking)) : null;
  }
}

export default Manager;