// DARK MODE TOGGLE SCRIPT

const btn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  btn.textContent = "Light Mode";
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
