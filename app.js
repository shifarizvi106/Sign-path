function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

startBtn.onclick = () => show("path");
openLesson.onclick = () => show("lesson");
backBtn.onclick = () => show("path");
