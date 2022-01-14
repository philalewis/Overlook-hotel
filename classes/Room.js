class Room {
  constructor (room) {
    this.number = room.number;
    this.type = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.cost = room.costPerNight;
  }
}

export default Room;