class Booking {
  constructor (booking) {
    this.id = booking.id || this.createNewId(17);
    this.userId = booking.userID || 0;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
    this.roomServiceCharges = booking.roomServiceCharges || [];
  }

  addServiceCharge(charge) {
    this.roomServiceCharges.push(charge);
  }

  createNewId(len) {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const numChars = chars.length;
    let result = []
    for(let i = 0; i < len; i++) {
      result.push(chars.charAt(Math.floor(Math.random() * numChars)))
    }
    return result.join('');
  }
}

export default Booking;