    let count = 0;
    const icons = document.querySelectorAll(".pera i");
    const counter = document.querySelector(".counter");

    icons.forEach(icon => {
      icon.addEventListener("click", () => {
        count++;
        counter.textContent = count;
      });
    });

// Copy count feature

    let count = 0;
    const counterEl = document.getElementById("counter");
    const buttons = document.querySelectorAll(".btn-copy");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        count++;
        counterEl.textContent = count;
      });
    });

// Calling, points and history features

const pointsSpan = document.querySelector('.hedda2 #points');
const callHistory = document.getElementById('call-history');
let points = 100;

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn-call') || e.target.closest('.btn-call')) {
    const button = e.target.closest('.btn-call');
    const parentItem = button.closest('.item');
    const message = parentItem.getAttribute('data-message');

    if (points <= 0) {
      alert("No points left!");
      return;
    }

    alert(message);

    points -= 20;
    if (points < 0) points = 0;
    pointsSpan.textContent = points;

    const title = parentItem.querySelector('.nameee')?.innerText || "Unknown";
    const number = parentItem.querySelector('.nummm')?.innerText || "";

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const li = document.createElement('li');
    li.classList.add('history-item');
    li.innerHTML = `
      <div class="history-header">
        <span class="history-title">${title}</span>
        <span class="history-time">${timeString}</span>
      </div>
      <span class="history-number">${number}</span>
    `;
    callHistory.appendChild(li);
  }
});