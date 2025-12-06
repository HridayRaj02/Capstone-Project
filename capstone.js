// DARK MODE TOGGLE SCRIPT

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "Light Mode";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
