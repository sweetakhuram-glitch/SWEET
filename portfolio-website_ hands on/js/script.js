const revealElements = document.querySelectorAll(".reveal");
const topBtn = document.getElementById("topBtn");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

revealOnScroll();

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function sendMessage(event) {
  event.preventDefault();

  document.getElementById("formMessage").innerHTML =
    "✅ Message sent successfully! This is a demo form.";

  event.target.reset();
}