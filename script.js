const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const floatingHearts = document.querySelector(".floating-hearts");

const noMessages = [
  "Hehe, are you sure? 🥺",
  "The teddy is asking you to reconsider! 🧸",
  "Just one tiny yes? 💗",
  "Oops, you almost caught the No button! 🙈",
  "I'll bring extra flowers! 💐"
];

let noCount = 0;

yesBtn.addEventListener("click", () => {
  message.textContent = "Yay!! You just made Nayan's day! 💖🌷";
  yesBtn.textContent = "You said YES! 💕";
  noBtn.hidden = true;
  launchHearts(28);
});

function moveNoButton() {
  // Keep the button within the visible browser window.
  const padding = 12;
  const rect = noBtn.getBoundingClientRect();
  const maxX = Math.max(padding, window.innerWidth - rect.width - padding);
  const maxY = Math.max(padding, window.innerHeight - rect.height - padding);
  const x = padding + Math.random() * Math.max(0, maxX - padding);
  const y = padding + Math.random() * Math.max(0, maxY - padding);

  noBtn.classList.add("running-away");
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.zIndex = "5";

  message.textContent = noMessages[noCount % noMessages.length];
  noCount++;
}

noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("click", () => {
  moveNoButton();
});

// Also make the playful button easier to dodge on touchscreens.
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });

function launchHearts(amount) {
  const symbols = ["💗", "💖", "💕", "🌸", "✨"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${16 + Math.random() * 22}px`;
    heart.style.animationDuration = `${2.5 + Math.random() * 3}s`;
    floatingHearts.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

// Gentle floating hearts in the background.
setInterval(() => {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = ["♡", "💗", "✨"][Math.floor(Math.random() * 3)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 16}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  floatingHearts.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}, 650);
