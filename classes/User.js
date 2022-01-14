class User {
  constructor (user = {name: 'guest', id: 99}) {
    this.id = user.id,
    this.name = user.name,
    this.username = this.name === 'guest' ? 'guest' : `customer${this.id}`,
    this.password = 'overlook2021'
  }
}

export default User;