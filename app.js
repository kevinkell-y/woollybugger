function showPage() {
  const hash = window.location.hash || "#home";

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  const activePage = document.querySelector(hash);

  if (activePage) {
    activePage.classList.add("active");
  } else {
    document.querySelector("#home").classList.add("active");
  }
}

window.addEventListener("hashchange", showPage);
showPage();