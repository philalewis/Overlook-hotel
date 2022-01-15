const retrieveData = api =>
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

const getRoomsData = retrieveData('rooms');

const getCustomersData = retrieveData('customers');

const getBookingsData = retrieveData('bookings');

const getSingleCustomer = id => retrieveData(`customers/${id}`);

export {getRoomsData, getCustomersData, getBookingsData, getSingleCustomer};