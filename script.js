document.addEventListener("DOMContentLoaded", () => {
  function getFilePath(filename) {
    const path = window.location.pathname;
    if (path.includes("/jenniferjoyce94.github.io/")) {
      return `/jenniferjoyce94.github.io/media/${filename}`;
    } else {
      return `./media/${filename}`;
    }
  }

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 1500);

  const liaPath = getFilePath("LIA-Kit.pdf");

  document.getElementById("tagline").innerHTML = `
    <p>
  Frontendstudent med bakgrund inom samordning, administration – med ett stort intresse för teknik, UX och tillgänglighet.
</p>
<p><em>Jag studerar just nu frontendutveckling på Nackademin och söker en LIA-plats (Lärande i Arbete): <br>8 december 2025 till 24 april 2026 </em></p>
    <a class="btn_one" href="${liaPath}" target="_blank">Läs om LIA (PDF)</a>
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
      picture: getFilePath("ProductivityApp.png"),
    },
    {
      title: "BookDucks",
      description:
        "BookDucks är en webbapplikation jag har byggt från grunden där användare kan utforska böcker, spara titlar i en personlig “Att läsa”-lista och sätta betyg på böcker de har läst. När man är inloggad kan man hantera sina sparade böcker, ge betyg mellan 1 och 5, och sortera listan efter författare, titel eller eget betyg. Bakom kulisserna används Strapi som headless CMS – där jag har organiserat bokdata, användarprofiler och kopplingar mellan dem. För att skydda användarnas information har jag lagt in inloggning med JWT-autentisering. Frontend-delen är byggd med ren JavaScript, och all kommunikation med backend hanteras med Axios.",

      link: "https://github.com/jenniferjoyce94/BookDucks",
      picture: getFilePath("BookDucks.png"),
    },
    {
      title: "Webbutik – Gränssnitt för användare och admin",
      description:
        "Som en del av ett team byggde jag en e-handelswebb där användare kan handla och admins hanterar produkter. Jag ansvarade för inloggningsflödet, att skapa konto, samt gränssnittet för startsidan. Jag byggde också återanvändbara komponenter och hämtade data med Axios. JWT användes för att skilja på användare och admin, och MongoDB var databasen i projektet.",
      link: "https://github.com/Ellen1997/2405_06_hakimLivs",
      picture: getFilePath("HakimLivs.png"),
    },
    {
      title: "Tamagotchi",
      description:
        "Ett roligt och nostalgiskt projekt där jag har byggt en Tamagotchi-liknande app. Användare kan mata, leka med och ta hand om sin virtuella Tamagotchi. Jag har implementerat funktioner för att hålla koll på hälsa, hunger och nöjdhet, samt en timer som påverkar Tamagotchins tillstånd över tid. Projektet är byggt med JavaScript och använder lokal lagring för att spara status mellan sessioner.",
      link: "https://github.com/jenniferjoyce94/tamagotchi",
      picture: getFilePath("Tamagotchi.png"),
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
    <div class="project-image-wrapper">
      <img src="${project.picture}" alt="${project.title}" class="project-image" />
    </div>
    <a href="${project.link}" class="btn_one" target="_blank">Visa projekt</a>
    `;
    workSection.appendChild(projectDiv);
  });

  document.getElementById("portfolio").insertAdjacentHTML(
    "beforeend",
    `
    <div id="education">
      <h1>Utbildning</h1>
  
      <div class="edu">
        <h2>Frontendutvecklare – Nackademin</h2>
        <h3>Augusti 2024 – pågående</h3>
      </div>
  
      <div class="edu">
        <h2>Undersköterska – Röda Korsets Högskola</h2>
        <h3>Examinerad 2017</h3>
      </div>
  
      <div class="edu">
        <h2>Naturvetenskap - Kunskapsgymnasiet Globen</h2>
        <h3>Examinerad 2013</h3>
      </div>
    </div>
  <div id="experience">
    <h1>Erfarenhet</h1>

    <div class="job">
      <h2>Diabetesresurs & Barnskötare</h2>
      <h3>Stockholm Stad – 2021 till pågående</h3>
      <ul>
        <li>Ansvarig för diabetesvård och utveckla rutiner för ett stabilt blodsocker.</li>
        <li>Driver det pedagogiska arbetet framåt tillsammans med arbetslaget.</li>
        <li>Utbildar nya medarbetare.</li>
      </ul>
    </div>

    <div class="job">
      <h2>Samordnare & Arbetsledare</h2>
      <h3>A & M Omsorg – 2017 till 2020</h3>
      <ul>
        <li>Ansvarade för schemaläggning, personalplanering och daglig drift.</li>
        <li>Säkerställde kvalitativ omsorg genom stöd till medarbetare och effektiv resursfördelning.</li>
      </ul>
    </div>

    <div class="job">
      <h2>Kundservice</h2>
      <h3>Selecta AB – sep 2016 till maj 2018</h3>
      <ul>
        <li>Hanterade enklare ekonomifrågor, felanmälningar, sälj och delegering.</li>
        <li>Systemvana i Movex, Borgun, Excel samt internutbildningar i kaffe, te och sälj.</li>
      </ul>
    </div>

    <div class="job">
      <h2>Kassabiträde & Varuplock</h2>
      <h3>ICA AB – somrarna 2014, 2015, 2016</h3>
      <ul>
        <li>Jobbade i kassa och med varuplock i högt tempo.</li>
        <li>Utvecklade stresshantering och kundbemötande.</li>
      </ul>
    </div>
  </div>


  <div id="extras">
    <h1>Övrigt</h1>

    <ul class="merit-list">
      <li>Körkort B – 2012</li>
      <li>Skoterkörkort – 2014</li>
      <li>HLR-certifikat – 2010, 2013, 2016, 2017, 2018, 2021, 2023</li>
      <li>SHLR-certifikat – 2018</li>
      <li>Handbollstränare för flickor födda 05 (2012–2017)</li>
      <li>Handbollstränare för pojkar födda 2012 (2016–2018)</li>
      <li>Språkkunskaper: Svenska (modersmål), Engelska (flytande)</li>
      <li>Preparandkurs – 2023</li>
    </ul>
  </div>
`
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <footer class="footer" id="contact">
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
