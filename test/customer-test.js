import chai from 'chai';
const expect = chai.expect;
import Customer from '../classes/Customer';
import users from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';

describe('Customer class', () => {

  let paulChambers;
  let anonymous;

  beforeEach(() => {
    paulChambers = new Customer(users[1], bookings);
    anonymous = new Customer();
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
    expect(paulChambers).to.be.an.instanceof(Customer);
  });

  it('should have a list of bookings', () => {
    expect(paulChambers.bookings.length).to.equal(1)
  });

  it('should have an empty list of bookings if no booking info is available', () => {
    expect(anonymous.bookings).to.be.an('array');
    expect(anonymous.bookings.length).to.equal(0);
  });

  it('should be a customer', () => {
    expect(paulChambers.type).to.equal('customer');
    expect(anonymous.type).to.equal('customer');
  });

  // it('should be able to book a room', () => {
  //   wyntonKelley.bookARoom()
  // })
});
