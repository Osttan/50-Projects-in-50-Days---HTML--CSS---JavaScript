const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then(response => response.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

// Using async await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await (
    await fetch("https://icanhazdadjoke.com", config)
  ).json();

  // const data = await response.json();

  jokeEl.innerHTML = response.joke;
}
