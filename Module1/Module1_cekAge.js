/*Write a function called "checkAge".

Given a person's name and age, "checkAge" returns one of two messages:

"Go home, {insert_name_here}!", if they are younger than 21.
"Welcome, {insert_name_here}!", if they are 21 or older.

Naturally, replace "{insert_name_here}" with the given name. :)

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'*/

function checkAge(name, age) {
  var person = '';
  if (age < 21) {
    person = 'Go home, ' + name + '!';
    return person;
  } else {
      person = 'Welcome, ' + name + '!'
      return person;
  }
}

var output = checkAge('Adrian', 22);
console.log(output);
