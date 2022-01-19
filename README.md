# Overlook Hotel

## Project Overview

This application allows a user to book rooms and view thier total expenses to a fictional hotel. Created during Turing School of Software and Design's Front End Engineering program, this application focused on:

* Using object oriented programming to drive the design of the application and code.
* Work with an API to send and recieve data through fetch requests
* Solidify the code review process on Github
* Creating a robust test suite that tests all the functionality of the client-side application.

## Demonstrations

Login page loads upon page load, then after login, shows a dashboard with all previously booked rooms, sorted by date, with upcoming bookings at the top.
![login screen](https://media.giphy.com/media/9erIpMmwmXYy91y8xN/giphy.gif)

The user can select a date, choose a room to book, and then book a room.
![filter rooms by date](https://media.giphy.com/media/j0IXChXqst7zYMEqsO/giphy.gif)

The user can filter the rooms on that date by type.
![filter by room type](https://media.giphy.com/media/j0IXChXqst7zYMEqsO/giphy.gif)

The user can then logout when finished using the site.
![logout](https://media.giphy.com/media/DPmCIEHuTEwGgKKswa/giphy.gif)

## Setup

This application was built using a local live server and depends on [webpack](https://webpack.js.org/). To view and use this site, clone this repo as well as [this repo](https://github.com/turingschool-examples/overlook-api)

Clone these repos into the same directory, cd into each of them, and install the library dependencies by running:

```bash
npm install
```

To view and use the site, run `npm start` in your terminal in each repo and then go to `http://localhost:8080/`.

## Technologies Used
* JavaScript
* HTML
* SCSS
* Mocha
* Chai
* Webpack

## Contributors
* Turing School of Software and Design Students
  * Phil Lewis

## Future Features
* Manager profile to book and delete bookings for any user.
