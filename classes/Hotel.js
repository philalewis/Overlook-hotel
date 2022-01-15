import Room from '../classes/Room';
import Customer from '../classes/Customer';
import Booking from '../classes/Booking';
import Manager from '../classes/Manager';


class Hotel {
  constructor (rooms, customers, bookings, id) {
    this.rooms = this.populateRooms(rooms);
    this.customers = this.populateCustomers(customers);
    this.bookings = this.populateBookings(bookings);
    this.managers = [new Manager()];
    this.filteredRooms = this.rooms;
    this.currentCustomer = this.getCustomerInfo(id);
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

  bookRoom(info) {
    this.bookings.push(new Booking(info));
  }

  cancelBooking(id) {
    const booking = this.bookings.find(book => book.id === id);
    const index = this.bookings.indexOf(booking);
    this.bookings.splice(index, 1);
  }

  getCustomerInfo(id) {
    return this.customers.find(customer => customer.id === id);
  }

  getCustomerBookings(id) {
    return this.bookings.filter(booking => booking.userId === id);
  }

  calculateCustomerExpenses(id) {
    const roomNumbers = this.getCustomerBookings(id).map(booking => {
      return booking.roomNumber;
    });
    
    const cost = roomNumbers.reduce((acc, roomNum) => {
      const currentRoom = this.rooms.find(room => {
        return room.number === roomNum;
      });
      acc += currentRoom.cost
      return acc;
    }, 0);

    return Math.round(cost * 100) / 100;
  }

  resetFilteredRooms() {
    this.filteredRooms = this.rooms;
  }
}

export default Hotel;