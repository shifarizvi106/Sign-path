// Screens
const welcomeScreen = document.getElementById("welcomeScreen");
const pathScreen = document.getElementById("pathScreen");
const lessonInfoScreen = document.getElementById("lessonInfoScreen");
const lessonScreen = document.getElementById("lessonScreen");

// Buttons
document.getElementById("startBtn").onclick = () => {
  welcomeScreen.classList.remove("active");
  pathScreen.classList.add("active");
};

document.getElementById("lesson1").onclick = () => {
  pathScreen.classList.remove("active");
  lessonInfoScreen.classList.add("active");
};

document.getElementById("beginLessonBtn").onclick = () => {
  lessonInfoScreen.classList.remove("active");
  lessonScreen.classList.add("active");
  index = 0;
  showSign();
};

document.getElementById("backBtn").onclick = () => {
  lessonScreen.classList.remove("active");
  pathScreen.classList.add("active");
};

// Dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// Lesson data
const LESSON = [
  { title: "HELLO", desc: "A friendly wave.", gif: "assets/signs/hello.gif" },
  { title: "HOW ARE YOU", desc: "A question using both hands.", gif: "assets/signs/how_are_you.gif" },
  { title: "I AM FINE", desc: "Thumb moves upward.", gif: "assets/signs/i_am_fine.gif" }
];

let index = 0;

// Elements
const signGif = document.getElementById("signGif");
const cardTitle = document.getElementById("cardTitle");
const cardDesc = document.getElementById("cardDesc");
const progressFill = document.getElementById("progressFill");
const motivatorText = document.getElementById("motivatorText");

// Motivators
const motivators = [
  "Progress over perfection.",
  "Every sign counts.",
  "You showed up today.",
  "Learning is a process."
];

// Show sign
function showSign() {
  const s = LESSON[index];
  signGif.src = "";
  setTimeout(() => signGif.src = s.gif, 20);

  cardTitle.textContent = s.title;
  cardDesc.textContent = s.desc;
  progressFill.style.width = `${((index + 1) / LESSON.length) * 100}%`;
  motivatorText.textContent = motivators[Math.floor(Math.random() * motivators.length)];
}

// Replay
document.getElementById("replayBtn").onclick = () => {
  const s = LESSON[index];
  signGif.src = "";
  setTimeout(() => signGif.src = s.gif, 20);
};

// Next
document.getElementById("nextBtn").onclick = () => {
  index++;
  if (index >= LESSON.length) {
    cardTitle.textContent = "Lesson Complete!!";
    cardDesc.textContent = "You learned basic greetings in ISL.";
    signGif.src = "";
    return;
  }
  showSign();
};

// Carousel
const slides = document.querySelectorAll(".carousel-slide");
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3500);
