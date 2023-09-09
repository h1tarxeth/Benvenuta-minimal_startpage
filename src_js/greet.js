function generateGreeting(name) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning " + name;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon " + name;
  } else if (currentHour >= 17 && currentHour < 21) {
    greeting = "Good evening " + name;
  } else {
    greeting = "Good night " + name;
  }

  return greeting;
}

// Set the greeting in the HTML element with the id "greeting"
const name = "Hitarth"; // Replace with the desired name
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = generateGreeting(name);
