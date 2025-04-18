import './style.css';
import data from "./data/data.js";

const A5Images = [
  "/A5/image1.jpg",
  "/A5/image2.jpg"
];

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>
      
      <section id="text-section" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: left; padding-top: 2rem;">
        <h2 style="text-align: left; margin-bottom: 2rem;">A5 Project</h2>
        <h3 style="text-align: left; width: 100%; margin-bottom: 1rem;">Description of A5 Project goes here.</h3>
      </section>

      <section id="projects" style="width: 100%; display: flex; flex-direction: column; align-items: center; padding-top: 2rem;" class="grid-section">
        <div style="width: 100%; max-width: 1400px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center;">
          ${A5Images.map((image, index) => `
            <div class="image-container" style="width: 500px; height: auto;">
              <img src="${image}" alt="A5-image${index + 1}" style="width: 100%; height: auto; object-fit: contain;" />
            </div>
          `).join("")}
        </div>
      </section>

      <div class="nav-arrow left" onclick="window.location.href='a4project.html'">&larr;</div>
    </main>
  `;
} catch (error) {
  console.error("Error rendering the app:", error);
}
