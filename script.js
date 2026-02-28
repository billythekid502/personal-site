(() => {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  window.opentab = (tabname, event) => {
    if (!tabLinks.length || !tabContents.length) return;

    tabLinks.forEach((link) => link.classList.remove("active-link"));
    tabContents.forEach((content) => content.classList.remove("active-tab"));

    if (event && event.currentTarget) {
      event.currentTarget.classList.add("active-link");
    }

    const target = document.getElementById(tabname);
    if (target) target.classList.add("active-tab");
  };

  const sidemenu = document.getElementById("sidemenu");

  window.openmenu = () => {
    if (!sidemenu) return;
    sidemenu.style.right = "0";
  };

  window.closemenu = () => {
    if (!sidemenu) return;
    sidemenu.style.right = "-200px";
  };

  const navLinks = sidemenu ? sidemenu.querySelectorAll("a") : [];

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.closemenu) window.closemenu();
    });
  });
})();
