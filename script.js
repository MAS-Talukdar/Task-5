    let count = 0;
    const icons = document.querySelectorAll(".pera i");
    const counter = document.querySelector(".counter");

    icons.forEach(icon => {
      icon.addEventListener("click", () => {
        count++;
        counter.textContent = count;
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

// Copy feature

      let copyCount = 0;
    const counterEl = document.getElementById("counter");

    async function copyTextToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    }

    document.addEventListener('click', async (e) => {
      const btn = e.target.closest(".btn-copy");
      if (!btn) return;

      const card = btn.closest('.item');
      let textToCopy = btn.dataset.copyText;

      if (textToCopy == null) {
        const selector = btn.dataset.copyTarget || '.nameee';
        const sourceEl = card.querySelector(selector);
        if (!sourceEl) return;
        textToCopy = sourceEl.textContent.trim();
      }

      const original = btn.textContent;
      try {
        await copyTextToClipboard(textToCopy);

        copyCount++;
        counterEl.textContent = copyCount;

        btn.textContent = 'Copied!';
      } catch {
        btn.textContent = 'Copy failed';
      } finally {
        setTimeout(() => { btn.textContent = original; }, 1200);
      }
    });