const externalLinks = {
    github: "https://github.com/mixomalepfane",
    codeberg: "https://codeberg.org/mixo",
    linkedin: "https://www.linkedin.com/in/mixo-malepfane",
    x: "https://x.com/mixomalepfane",
    email: "mailto:malepfanemixo@gmail.com",
    north_west: "https://www.nwu.ac.za",
};

document.addEventListener("DOMContentLoaded", () => {
  for (const [key, url] of Object.entries(externalLinks)) {
    document.querySelectorAll(`[data-link="${key}"]`).forEach(el => {
      el.setAttribute("href", url);
    });
  }
});

