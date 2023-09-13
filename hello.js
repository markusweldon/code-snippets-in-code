// Imagine your cool code snippet here 😎
const hello = "Hello, World!";

// Function for greeting based on the time of day ⏱️
function generateGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning,";
    } else if (currentHour < 18) {
        greeting = "Good afternoon,";
    } else {
        greeting = "Good evening,";
    }

    return greeting;
}

// Let's impress everyone with a witty log statement 👨‍💻
console.log(`Markus says: ${hello} ${generateGreeting()} let's code something awesome together! 👨‍💻`);