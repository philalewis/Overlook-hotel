import chai from 'chai';
const expect = chai.expect;
import Booking from '../classes/Booking';
import bookings from '../data/sample-bookings-data';

describe.only('Booking class', () => {

  let booking;

  beforeEach(() => {
    booking = new Booking(bookings[0])
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should have an id', () => {
    expect(booking.id).to.equal('5fwrgu4i7k55hl6sz');
  });

  // it('should be able to create an id if none is provided', () => {
  //   expect(booking.createNewId().length).to.equal(17);
  // });

  it('should have a userId', () => {
    expect(booking.userId).to.equal(1);
  });

  it('should have a date', () => {
    expect(booking.date).to.equal("2022/04/22");
  });

  it('should have a room number', () => {
    expect(booking.roomNumber).to.equal(1);
  });

  it('should start without any room service charges', () => {
    expect(booking.roomServiceCharges).to.be.an('array');
  });

  it('should be able to add room service charges', () => {
    expect(booking.roomServiceCharges.length).to.equal(0);

    booking.addServiceCharge('breakfast');

    expect(booking.roomServiceCharges.length).to.equal(1);
  });

});