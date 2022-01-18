import User from './User';
import Booking from './Booking';

class Customer extends User {
  constructor(user, bookings) {
    super(user);
    this.bookings = bookings ? this.populateBookings(bookings) : [];
    this.type = 'customer';
  }

  populateBookings(bookings) {
    return bookings.filter(booking => booking.userID === this.id);
  }

  updateBookings(bookingsData, roomsData) {
    const updatedBookings = bookingsData.filter(booking => booking.userID === this.id);
    this.bookings = updatedBookings.map(booking => new Booking(booking, roomsData));
  }
}

export default Customer;