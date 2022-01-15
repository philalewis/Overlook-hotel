import Room from '../classes/Room';
import Customer from '../classes/Customer';
import Booking from '../classes/Booking';
import Manager from '../classes/Manager';


class Hotel {
  constructor (rooms, customers, bookings) {
    this.rooms = this.populateRooms(rooms);
    this.customers = this.populateCustomers(customers);
    this.bookings = this.populateBookings(bookings);
    this.managers = [new Manager()];
    this.filteredRooms = this.rooms;
  }

  populateRooms(rooms) {
    return rooms ? rooms.map(room => new Room(room)) : [];
  }

  populateCustomers(customers) {
    return customers ? customers.map(customer => new Customer(customer)) : [];
  }

  populateBookings(bookings) {
    return bookings ? bookings.map(booking => new Booking(booking)) : [];
  }

  filterRooms(type, value) {
    this.filteredRooms = this.filteredRooms.filter(room => {
      return room[type] === value
    })
  }

  filterByDate(date) {
    const convertedDate = date.split('-').join('/');
    const bookings = this.bookings.filter(booking => {
      return booking.date === convertedDate
    });
    const roomNumbers = bookings.map(booking => booking.roomNumber);
    this.filteredRooms = this.rooms.filter(room => {
      return !roomNumbers.includes(room.number)
    })
  }
}

export default Hotel;