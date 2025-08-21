function sayHello() {
  alert("Hello, thanks for visiting! 🌟");
}

function updateGreeting() {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good Morning! ☀️";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon! 🌤️";
  } else {
    greeting.textContent = "Good Evening! 🌙";
  }
}

updateGreeting();
