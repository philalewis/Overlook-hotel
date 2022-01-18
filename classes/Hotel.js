import Room from '../classes/Room';
import Customer from '../classes/Customer';
import Booking from '../classes/Booking';
import Manager from '../classes/Manager';

class Hotel {
  constructor (rooms, customers, bookings) {
    this.rooms = this.populateRooms(rooms);
    this.bookings = this.populateBookings(bookings, this.rooms);
    this.customers = this.populateCustomers(customers);
    this.managers = [new Manager()];
    this.filteredRooms = this.rooms;
    this.currentCustomer = null;
    this.selectedRoom = null;
    this.selectedDate = null;
  }

  populateRooms(rooms) {
    return rooms ? rooms.map(room => {
      return new Room(room)
    }) : [];
  }

  populateCustomers(customers) {
    return customers ? customers.map(customer => {
      return new Customer(customer, this.bookings)
    }) : [];
  }

  populateBookings(bookings, rooms) {
    this.bookings = [];
    return bookings ? this.bookings = bookings.map(booking => {
      return new Booking(booking, rooms)
    }) : this.bookings = [];
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
    this.bookings.push(new Booking(info, this.rooms));
  }

  cancelBooking(id) {
    const booking = this.bookings.find(book => book.id === id);
    const index = this.bookings.indexOf(booking);
    this.bookings.splice(index, 1);
  }

  getCustomerInfo(id) {
    return this.currentCustomer = this.customers.find(customer => customer.id === id);
  }

  getCustomerBookings(id) {
    return this.bookings.filter(booking => booking.userID === id);
  }

  calculateCustomerExpenses(id) {
    const roomNumbers = this.getCustomerBookings(id).map(booking => {
      return booking.roomNumber;
    });
    
    const cost = roomNumbers.reduce((acc, roomNum) => {
      const currentRoom = this.rooms.find(room => {
        return room.number === roomNum;
      });
      acc += parseFloat(currentRoom.cost)
      return acc;
    }, 0);

    return Math.round(cost * 100) / 100;
  }

  resetFilteredRooms() {
    this.filteredRooms = this.rooms;
  }

  updateRoomSelection(roomNum) {
    this.selectedRoom = roomNum;
  }

  updateSelectedDate(date) {
    this.selectedDate = date.split('-').join('/');
  }
}

export default Hotel;