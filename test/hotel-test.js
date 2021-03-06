import chai from 'chai';
const expect = chai.expect;
import Hotel from '../classes/Hotel';
import Room from '../classes/Room';
import Customer from '../classes/Customer';
import Booking from '../classes/Booking';
import rooms from '../data/sample-rooms-data';
import customers from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';

describe('Hotel class', () => {

  let hotel;

  beforeEach(() => {
    hotel = new Hotel(rooms, customers, bookings, 1);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have a list of rooms', () => {
    expect(hotel.rooms).to.be.an('array');
    expect(hotel.rooms[0]).to.be.an.instanceof(Room);
  });

  it('should have a filtered list', () => {
    expect(hotel.filteredRooms).to.be.an('array');
    expect(hotel.filteredRooms.length).to.equal(hotel.rooms.length);
  });

  it('should be able to filter rooms by type', () => {
    hotel.filterRooms('bedSize', 'queen')
    expect(hotel.filteredRooms.length).to.equal(2);
    
    hotel.filterRooms('numBeds', 2);

    expect(hotel.filteredRooms.length).to.equal(1);
  });
  
  it('should be able to filter available rooms on a given date', () => {
    hotel.filterByDate("2022-04-22")

    expect(hotel.filteredRooms).to.be.an('array');
    expect(hotel.filteredRooms.length).to.equal(1);
  });

  it('should have a list of bookings', () => {
    expect(hotel.bookings).to.be.an('array');
    expect(hotel.bookings[0]).to.be.an.instanceof(Booking);
  });

  it('should be able to create a new booking', () => {
    const bookingInfo = {
      userID: 1,
      date: '2022/05/07',
      roomNumber: 1
    }
    hotel.bookRoom(bookingInfo);

    expect(hotel.bookings.length).to.equal(6);
    expect(hotel.bookings[5].id.length).to.equal(17);
  });
  
  it('should be able to delete a booking', () => {
    expect(hotel.bookings.length).to.equal(5);
    
    hotel.cancelBooking("5fwrgu4i7k55hl6t6");
  
    expect(hotel.bookings.length).to.equal(4);
    expect(hotel.bookings[2].id).to.equal("5fwrgu4i7k55hl6t7");
  });

  it('should have a list of customers', () => {
    expect(hotel.customers).to.be.an('array');
    expect(hotel.customers[0]).to.be.an.instanceof(Customer);
  });

  it('should be able to pull up a customer\'s profile', () => {
    expect(hotel.getCustomerInfo(1).id).to.equal(1);
    expect(hotel.getCustomerInfo(1)).to.be.an.instanceof(Customer);
  });

  it('should pull a given customer\'s bookings', () => {
    expect(hotel.getCustomerBookings(1)).to.be.an('array');
    expect(hotel.getCustomerBookings(1).length).to.equal(3);
    expect(hotel.getCustomerBookings(1)[0].roomNumber).to.equal(1);
  });

  it('should be able to calculate how much a given user has spent', () => {
    expect(hotel.calculateCustomerExpenses(1)).to.equal(1194.18);
  });

  it('should have at least one manager', () => {
    expect(hotel.managers).to.be.an('array');
    expect(hotel.managers.length).to.equal(1);
  });

  it('should be able to reset the filtered list of rooms', () => {
    expect(hotel.filteredRooms.length).to.equal(2);
    
    hotel.filterByDate("2022-04-22");

    expect(hotel.filteredRooms.length).to.equal(1);

    hotel.resetFilteredRooms();

    expect(hotel.filteredRooms.length).to.equal(2);
  });

  it('should have a current customer', () => {
    hotel.getCustomerInfo(1)
    expect(hotel.currentCustomer).to.be.an.instanceof(Customer);
  });
});