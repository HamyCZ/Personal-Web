(function () {
  const year = document.getElementById("y");
  if (year) year.textContent = String(new Date().getFullYear());
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) { reg.unregister(); });
    });
  }
})();
