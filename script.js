document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1500);

  document.getElementById("tagline").innerHTML = `
    <p>
  Frontendutvecklare med en bakgrund inom samordning, administration och pedagogik – och ett stort intresse för teknik, UX och tillgänglighet.
</p>
<p><em>Jag studerar just nu frontendutveckling på Nackademin och söker en LIA-plats (Lärande i Arbete) mellan 8 december 2025 och 24 april 2026.</em></p>
    <button class="btn_one">Läs mer</button>
  `;

  document.getElementById("skills").innerHTML = `
    <h1>Om mig</h1>
    <p>
      Jag är en engagerad och målmedveten student inom frontend-utveckling på Nackademins yrkeshögskola.
      Med erfarenhet från vård, utbildning och administration, kombinerar jag min tekniska nyfikenhet
      med stark organisationsförmåga och problemlösningsförmåga.
    </p>
    <h2>Kompetenser</h2>
    <ul>
      <li>HTML, CSS, JavaScript, SASS, Bootstrap, React</li>
      <li>Figma, UX-design, Accessibility, Responsiv design</li>
      <li>Git, Trello, Scrum och Agila metoder</li>
    </ul>
  `;

  const projects = [
    {
      title: "Productivity App",
      description:
        "Ett smidigt verktyg för att hålla koll på vardagen, byggt med JavaScript och JSON Server. Du kan skapa ett konto, logga in och enkelt hålla reda på dina att-göra-listor, vanor och planerade aktiviteter. Allt sparas personligt så att du alltid har din egen översikt nära till hands.",
      link: "https://github.com/juhliagullbrand/Productivity-assistant-application",
      picture: "./images/productivity-app.png",
    },
    {
      title: "BookDucks",
      description:
        "BookDucks är en webbapplikation jag har byggt från grunden där användare kan utforska böcker, spara titlar i en personlig “Att läsa”-lista och sätta betyg på böcker de har läst. När man är inloggad kan man hantera sina sparade böcker, ge betyg mellan 1 och 5, och sortera listan efter författare, titel eller eget betyg. Bakom kulisserna används Strapi som headless CMS – där jag har organiserat bokdata, användarprofiler och kopplingar mellan dem. För att skydda användarnas information har jag lagt in inloggning med JWT-autentisering. Frontend-delen är byggd med ren JavaScript, och all kommunikation med backend hanteras med Axios.",

      link: "https://github.com/jenniferjoyce94/BookDucks",
    },
    {
      title: "Webbutik – Gränssnitt för användare och admin",
      description:
        "Som en del av ett team byggde jag en e-handelswebb där användare kan handla och admins hanterar produkter. Jag ansvarade för inloggningsflödet, att skapa konto, samt gränssnittet för startsidan. Jag byggde också återanvändbara komponenter och hämtade data med Axios. JWT användes för att skilja på användare och admin, och MongoDB var databasen i projektet.",
      link: "https://github.com/Ellen1997/2405_06_hakimLivs",
    },
    {
      title: "Tamagotchi",
      description:
        "Ett roligt och nostalgiskt projekt där jag har byggt en Tamagotchi-liknande app. Användare kan mata, leka med och ta hand om sin virtuella Tamagotchi. Jag har implementerat funktioner för att hålla koll på hälsa, hunger och nöjdhet, samt en timer som påverkar Tamagotchins tillstånd över tid. Projektet är byggt med JavaScript och använder lokal lagring för att spara status mellan sessioner.",
      link: "https://github.com/jenniferjoyce94/tamagotchi",
    },
  ];

  const workSection = document.getElementById("work");
  workSection.innerHTML = "<h1>Projekt</h1>";

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" class="btn_one" target="_blank">Visa projekt</a>
    `;
    workSection.appendChild(projectDiv);
  });

  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <footer id="footer">
  <h1 id="footer-h1">Kontakt</h1>
    <p>Jennifer Joyce – Frontend Developer</p>
    <div class="footer-links">
      <a href="mailto:jennifer.joyce.jaglund@gmail.com" target="_blank" aria-label="Email">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a href="https://www.linkedin.com/in/jennifer-joyce-765bba9b/" target="_blank" aria-label="LinkedIn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/jenniferjoyce94" target="_blank" aria-label="GitHub">
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
     </footer>
`
  );
});
