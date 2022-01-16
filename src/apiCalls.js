const retrieveData = api =>
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

const catchError = response => {
  if(response.ok) {
    response.json();
  } else {
    throw new Error('Something went wrong. Please try again');
  }
}

const getRoomsData = retrieveData('rooms');

const getCustomersData = retrieveData('customers');

const getBookingsData = retrieveData('bookings');

// const getSingleCustomer = id => retrieveData(`customers/${id}`);

const postBooking = (obj) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => catchError(response));
}

export {getRoomsData, getCustomersData, getBookingsData, postBooking};