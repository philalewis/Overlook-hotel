import chai from 'chai';
const expect = chai.expect;
// import User from '../classes/User';
import Customer from '../classes/Customer';
import users from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';

describe.only('Customer class', () => {

  let wyntonKelley;
  let anonymous;

  beforeEach(() => {
    wyntonKelley = new Customer(users[0], bookings);
    anonymous = new Customer();
  })

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
    expect(wyntonKelley).to.be.an.instanceof(Customer);
  });

  it('should have a list of bookings', () => {
    expect(wyntonKelley.bookings.length).to.equal(3)
  });

  it('should have an empty list of bookings if no booking info is available', () => {
    expect(anonymous.bookings).to.be.an('array');
    expect(anonymous.bookings.length).to.equal(0);
  });

  // it('should be able to book a room', () => {
  //   wyntonKelley.bookARoom()
  // })
});
