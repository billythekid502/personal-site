(() => {
  const toggleButton = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggleButton || !nav) return;

  const overlay = document.getElementById("nav-overlay");
  const navLinks = nav.querySelectorAll("a");

  const setState = (open) => {
    toggleButton.setAttribute("aria-expanded", String(open));
    nav.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("nav-open", open);
    if (overlay) overlay.setAttribute("aria-hidden", String(!open));
  };

  const isOpen = () => toggleButton.getAttribute("aria-expanded") === "true";

  const closeNav = () => setState(false);
  const toggleNav = () => setState(!isOpen());

  toggleButton.addEventListener("click", toggleNav);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeNav());
  });

  if (overlay) {
    overlay.addEventListener("click", () => closeNav());
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
})();
