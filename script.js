let joke = document.getElementById("joke");
let button = document.querySelector("button");

let jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
  "I told my computer I needed a break, and it said 'No problem, I'll go to sleep.' 🖥️💤",
  "Why don’t skeletons fight each other? They don’t have the guts. 💀",
  "Why did the math book look sad? It had too many problems. 📚",
  "I would tell you a construction joke, but I'm still working on it. 🚧",
];

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * jokes.length);
  joke.textContent = jokes[randomIndex];
});
