var n = 5;

const body = document.querySelector("body");
width = window.innerWidth;

for (let i = 0; i < 50; i++) {
  snowball = document.createElement("div");
  snowball.classList.add("snow");
  snowball.style.left = `${Math.random() * width}px`;
  snowball.style.animationDelay = `${Math.random() * 5}s`;
  snowball.style.animationDuration = `${(Math.random() + 2) * 3}s`;

  body.appendChild(snowball);
}

function createStar(delay) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.innerText = "*";

  star.style.animationDelay = `${delay}s`;
  return star;
}

function createBranch(text, delay) {
  const branch = document.createElement("span");
  branch.classList.add("branch");
  branch.innerText = text;
  branch.style.animationDelay = `${delay}s`;
  return branch;
}

for (let i = 0; i <= n; i++) {
  const heading = document.createElement("h1");

  heading.appendChild(createStar(i % 4));
  heading.appendChild(createBranch("|".repeat(i), i % 2));

  if (i > 0) {
    heading.appendChild(createStar(i % 4));
  }

  body.appendChild(heading);
}
