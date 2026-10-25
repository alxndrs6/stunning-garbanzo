//definicja funkcji
function displayGreetingStandard() {
  console.log("Hello, world!");
}
displayGreetingStandard();

//funkcja z parametrem
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
displayGreeting("Alessandro");

//funkcja z parametrem i wartością domyślną
function displayGreetingAdvanced(name, salutation = "Hello") {
  console.log(`${salutation} ${name} `);
}
displayGreetingAdvanced("Alessandro", "Hi");
displayGreetingAdvanced("Alessandro");
