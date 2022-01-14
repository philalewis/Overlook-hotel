import User from './User';

class Customer extends User {
  constructor(user, bookings) {
    super(user);
    this.bookings = this.filterBookings(bookings);
    this.totalSpent = this.calculateTotalSpent();
    this.type = 'customer';
  }

  filterBookings(bookings) {
    return bookings ? bookings.filter(booking => booking.userID === this.id) : [];
  }

  calculateTotalSpent() {
    return this.bookings.reduce((acc, booking) => {
      acc += booking
      return acc;
    }, 0)
  }
}

export default Customer;