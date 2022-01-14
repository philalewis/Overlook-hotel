import chai from 'chai';
const expect = chai.expect;
import Manager from '../classes/Manager';
import users from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';

describe.only('Manager class', () => {
  let billEvans;
  let anonymous;

  beforeEach(() => {
    billEvans = new Manager(users[2], bookings);
    anonymous = new Manager();
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
    expect(billEvans).to.be.an.instanceof(Manager);
  });

  it('should have a list of bookings', () => {
    expect(billEvans.bookings).to.be.an('array');
    expect(billEvans.bookings.length).to.equal(5);
  });

  
})