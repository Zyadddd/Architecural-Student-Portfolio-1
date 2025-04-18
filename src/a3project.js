import './style.css';
import data from "./data/data.js";

const A3Images = [
  "/A3/DSGN313_A3-12.png",
  "/A3/DSGN313_A3-13.png"
];

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>
      
      <section id="text-section" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: left; padding-top: 2rem;">
        <h2 style="text-align: left; margin-bottom: 2rem;">A3 Project</h2>
        <h3 style="text-align: left; width: 100%; margin-bottom: 1rem;">The Guilt Sponge, embodies the unsustainable cycle of digital indulgence and self-aware guilt by revealing the dichotomy between mindful and mindlessness.</h3>
        <br>
        <h4>Form</h4>
        <h5> A parasitic headpiece resembling a living, bioluminescent jellyfish Its translucent tendrils burrow into the user’s scalp, extracting dopamine each time they indulge in mindless entertainment (scrolling, binge-watching).</h5>
        <br>
        <h4>Dopamine Drain</h4>
        <h5>As the user consumes content, the crown glows brighter, its tendrils pulsating with stolen neurotransmitters.</h5>
        <br>
        <h4>Mindful Depletion</h4>
        <h5>Once drained, the user is confronted with their guilt and consciousness, forcing them into a state of mindfulness.</h5>
        <br>
        <h4>Repeat</h4>
        <h5> The energy this parasite drains is then converted into electricity charging the user's device allowing this cycle to be perpetuated.</h5>

      </section>

      <section id="projects" style="width: 100%; display: flex; flex-direction: column; align-items: center; padding-top: 2rem;" class="grid-section">
        <div style="width: 100%; max-width: 1400px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center;">
          ${A3Images.slice(0, 2).map((image, index) => `
            <div class="image-container" style="width: 500px; height: auto;">
              <img src="${image}" alt="A3-image${index + 1}" style="width: 100%; height: auto; object-fit: contain;" />
            </div>
          `).join("")}
        </div>
      </section>

      <div class="nav-arrow left" onclick="window.location.href='a2project.html'">&larr;</div>
      <div class="nav-arrow right" onclick="window.location.href='a4project.html'">&rarr;</div>
    </main>
  `;
} catch (error) {
  console.error("Error rendering the app:", error);
}
