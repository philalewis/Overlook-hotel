import chai from 'chai';
const expect = chai.expect;
import User from '../classes/User';
import Manager from '../classes/Manager';
import users from '../data/sample-customers-data';
import bookings from '../data/sample-bookings-data';

describe('Manager class', () => {
  let paulChambers;
  let anonymous;

  beforeEach(() => {
    paulChambers = new Manager(users[0], bookings);
    anonymous = new Manager();
  })
})