import User from './User';

class Manager extends User {
  constructor(user, bookings) {
    super(user);
    this.type = 'manager';
    this.bookings = this.getBookings(bookings);
  }

  getBookings(bookings) {
    return bookings.map(booking => new Booking(booking));
  }
}

export default Manager;