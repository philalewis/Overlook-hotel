import User from './User';
import Booking from './Booking';

class Manager extends User {
  constructor(user, bookings, rooms) {
    super(user);
    this.type = 'manager';
    this.bookings = this.getBookings(bookings, rooms);
  }

  getBookings(bookings, rooms) {
    return bookings ? bookings.map(booking => new Booking(booking, rooms)) : null;
  }
}

export default Manager;