import chai from 'chai';
const expect = chai.expect;
import User from '../classes/User';
import users from '../data/sample-customers-data'

describe('See if the tests are running', function() {

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

  it('should')
});
