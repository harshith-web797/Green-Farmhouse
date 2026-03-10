window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.style.background =
    window.scrollY > 50 ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.55)";
});

document
  .querySelector(".booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Booking Request Submitted!");
  });
