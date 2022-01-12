import chai from 'chai';
const expect = chai.expect;
import User from '../classes/User';
import users from '../data/sample-customers-data'

describe('User class', () => {

  let wyntonKelley;
  let anonymous;

  beforeEach(() => {
    wyntonKelley = new User(users[0]);
    anonymous = new User();
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
    expect(wyntonKelley).to.be.an.instanceof(User);
  });

  it('should have an id', () => {
    expect(wyntonKelley.id).to.equal(1);
  });

  it('should have a default id if no user is found', () => {
    expect(anonymous.id).to.equal(99);
  });

  it('should have a name', () => {
    expect(wyntonKelley.name).to.equal('Wynton Kelley');
  });

  it('should have a guest name', () => {
    expect(anonymous.name).to.equal('guest');
  });

  it('should have a username', () => {
    expect(wyntonKelley.username).to.equal('customer01');
  });

  it('should have a guest username', () => {
    expect(anonymous.username).to.equal('guest');
  });

  it('should have a password', () => {
    expect(wyntonKelley.password).to.equal('overlook2021');
    expect(anonymous.password).to.equal('overlook2021');
  });
});
