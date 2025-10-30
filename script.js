// Burger Menu Toggle
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  burgerBtn.classList.toggle("active");
});

// Carousel change (Hero Section)
const images = [
  "Assets/carousel1.png",
  "Assets/carousel2.png",
  "Assets/carousel3.png",
];
let currentIndex = 0;
const imgElement = document.getElementById("hero-img");
function changeImage() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  imgElement.src = images[currentIndex];
}
setInterval(changeImage, 1500);

// Carousel change (Discover Section)
const container = document.getElementById("offers-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const items = Array.from(container.children);

function moveNext() {
  const first = items.shift();
  items.push(first);
  container.appendChild(first);
}

function movePrev() {
  const last = items.pop();
  items.unshift(last);
  container.prepend(last);
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);
