import chai from 'chai';
const expect = chai.expect;
import Manager from '../classes/Manager';
import users from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';
import rooms from '../data/sample-rooms-data';

describe('Manager class', () => {

  let billEvans;

  beforeEach(() => {
    billEvans = new Manager(users[2], bookings, rooms);
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
    expect(billEvans).to.be.an.instanceof(Manager);
  });

  it('should have a list of bookings', () => {
    expect(billEvans.bookings).to.be.an('array');
    expect(billEvans.bookings.length).to.equal(5);
  });
});