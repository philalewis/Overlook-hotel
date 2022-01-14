import chai from 'chai';
const expect = chai.expect;
import Room from '../classes/Room';
import rooms from '../data/sample-rooms-data';

describe.only('Room class', () => {

  let room;

  beforeEach(() => {
    room = new Room(rooms[0]);
  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
    expect(room).to.be.an.instanceof(Room);
  });

  it('should have a room number', () => {
    expect(room.number).to.equal(1);
  });

  it('should have a room type', () => {
    expect(room.type).to.equal("residential suite");
  });

  it('should have an option for a bidet', () => {
    expect(room.bidet).to.equal(true);
  });

  it('should have a bed size', () => {
    expect(room.bedSize).to.equal('queen');
  });

  it('should have a number of beds', () => {
    expect(room.numBeds).to.equal(1);
  });

  it('should have a cost per night', () => {
    expect(room.cost).to.equal(358.4);
  });
});