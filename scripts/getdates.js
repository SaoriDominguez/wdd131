// Set current year and last modified date in the footer
(() => {
  const yearNode = document.getElementById("currentyear");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const lastModNode = document.getElementById("lastModified");
  if (lastModNode) {
    lastModNode.textContent = `Last Modification: ${document.lastModified}`;
  }
})();
