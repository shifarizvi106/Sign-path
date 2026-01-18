/* =====================
   SAFE SCREEN HANDLER
===================== */
function showScreen(screenId) {
  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}

/* =====================
   SCREENS
===================== */
startBtn.onclick = () => showScreen("pathScreen");
lesson1.onclick = () => showScreen("lessonInfoScreen");
beginLessonBtn.onclick = () => {
  index = 0;
  showScreen("lessonScreen");
  showSign();
};
backBtn.onclick = () => showScreen("pathScreen");

/* =====================
   DARK MODE
===================== */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* =====================
   LESSON DATA
===================== */
const LESSON = [
  {
    title: "HELLO",
    desc: "A friendly wave.",
    gif: "assets/signs/hello.gif"
  },
  {
    title: "HOW ARE YOU",
    desc: "A question using both hands.",
    gif: "assets/signs/how_are_you.gif"
  },
  {
    title: "I AM FINE",
    desc: "Thumb moves upward.",
    gif: "assets/signs/i_am_fine.gif"
  }
];

let index = 0;

/* =====================
   ELEMENTS
===================== */
const signGif = document.getElementById("signGif");
const cardTitle = document.getElementById("cardTitle");
const cardDesc = document.getElementById("cardDesc");
const progressFill = document.getElementById("progressFill");
const motivatorText = document.getElementById("motivatorText");

/* =====================
   MOTIVATORS
===================== */
const motivators = [
  "Progress over perfection.",
  "You’re learning a real language.",
  "Every sign matters.",
  "You showed up today."
];

/* =====================
   SHOW SIGN
===================== */
function showSign() {
  const s = LESSON[index];
  signGif.src = "";
  setTimeout(() => signGif.src = s.gif, 20);

  cardTitle.textContent = s.title;
  cardDesc.textContent = s.desc;
  progressFill.style.width =
    `${((index + 1) / LESSON.length) * 100}%`;

  motivatorText.textContent =
    motivators[Math.floor(Math.random() * motivators.length)];
}

/* =====================
   CONTROLS
===================== */
replayBtn.onclick = () => showSign();

nextBtn.onclick = () => {
  index++;
  if (index >= LESSON.length) {
    cardTitle.textContent = "Lesson Complete 🌸";
    cardDesc.textContent = "You learned basic ISL greetings.";
    signGif.src = "";
    return;
  }
  showSign();
};

/* =====================
   CAROUSEL
===================== */
const slides = document.querySelectorAll(".carousel-slide");
let slideIndex = 0;

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);
