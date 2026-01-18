const landing = document.getElementById("landing");
const learn = document.getElementById("learn");
const startBtn = document.getElementById("startLearning");
const themeToggle = document.getElementById("themeToggle");

/* Screen switch */
startBtn.onclick = () => {
  landing.classList.remove("active");
  learn.classList.add("active");
};

/* Dark mode */
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
};
