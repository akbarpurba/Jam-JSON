document.addEventListener("DOMContentLoaded", () => {
  const hours = document.getElementById("hours");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  function renderTime() {
    const now = new Date();

    if (hours) hours.textContent = String(now.getHours()).padStart(2, "0");
    if (min) min.textContent = String(now.getMinutes()).padStart(2, "0");
    if (sec) sec.textContent = String(now.getSeconds()).padStart(2, "0");
  }

  function syncClock() {
    renderTime();
    const delay = 1000 - new Date().getMilliseconds();
    setTimeout(syncClock, delay);
  }

  syncClock();

  const lines = document.querySelectorAll(".line");
  const nums = document.querySelectorAll(".lines div");

  function setActive(line){
    lines.forEach(l => l.classList.remove("active"));
    nums.forEach(n => n.classList.remove("active"));

    document.querySelector(`.line[data-line="${line}"]`)?.classList.add("active");
    document.querySelector(`.lines div[data-line="${line}"]`)?.classList.add("active");
  }

  lines.forEach(l=>{
    l.addEventListener("click", ()=>{
      setActive(l.dataset.line);
    });
  });

  nums.forEach(n=>{
    n.addEventListener("click", ()=>{
      setActive(n.dataset.line);
    });
  });
});