/* SCREEN SWITCH */
function showScreen(id) {
  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* STATE */
let progress = JSON.parse(localStorage.getItem("progress")) || {
  unlocked: 1,
  completed: 0
};

function saveProgress() {
  localStorage.setItem("progress", JSON.stringify(progress));
}

/* LESSON DATA */
const LESSON = [
  {
    title: "HELLO",
    word: "Hello",
    desc: "A wave with the palm facing out.",
    gif: "assets/signs/hello.gif"
  },
  {
    title: "HOW ARE YOU",
    word: "How are you?",
    desc: "A question using both hands.",
    gif: "assets/signs/how_are_you.gif"
  },
  {
    title: "I AM FINE",
    word: "I am fine",
    desc: "Thumb moves upward from the chest.",
    gif: "assets/signs/i_am_fine.gif"
  }
];

let index = 0;

/* ELEMENTS */
const signGif = document.getElementById("signGif");
const cardTitle = document.getElementById("cardTitle");
const cardWord = document.getElementById("cardWord");
const cardDesc = document.getElementById("cardDesc");

/* LANDING */
startBtn.onclick = () => showScreen("pathScreen");

/* PATH */
function updatePath() {
  document.querySelectorAll(".path-node").forEach((node, i) => {
    node.classList.toggle("active", i < progress.unlocked);
    node.onclick = () => {
      if (i < progress.unlocked) {
        index = 0;
        showScreen("lessonScreen");
        showSign();
      }
    };
  });
}

updatePath();

/* LESSON */
function showSign() {
  const s = LESSON[index];
  signGif.src = "";
  setTimeout(() => signGif.src = s.gif, 20);
  cardTitle.textContent = s.title;
  cardWord.textContent = s.word;
  cardDesc.textContent = s.desc;
}

nextBtn.onclick = () => {
  index++;
  if (index >= LESSON.length) {
    progress.completed++;
    progress.unlocked = Math.max(progress.unlocked, progress.completed + 1);
    saveProgress();
    updatePath();
    showScreen("pathScreen");
    return;
  }
  showSign();
};

backBtn.onclick = () => showScreen("pathScreen");

/* REVIEW */
reviewTab.onclick = () => {
  showScreen("reviewScreen");
  reviewLessons.textContent = progress.completed;
  reviewSigns.textContent = progress.completed * LESSON.length;
};

learnTab.onclick = () => showScreen("pathScreen");

/* DARK MODE */
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};
