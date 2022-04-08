const Events = require('events');
const event = new Events();

// sayMyName Event

event.on('sayMyName', () => {
  console.log('Hello, Your First Name is Madhav');
});

event.on('sayMyName', () => {
  console.log('and, Your Middle Name is Rajeev');
});

event.on('sayMyName', () => {
  console.log('and, Your Last Name is Jha');
});

event.emit('sayMyName');

// addNumber Event

event.on('addNumber', (a, b, c) => {
  console.log(`Sum is ${a + b + c}`);
});

event.emit('addNumber', 2, 3, 4);
