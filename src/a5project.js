import './style.css';
import data from "./data/data.js";

const A5Images = [
  "/A5/dsgn313_a5_FILE-1.png",
  "/A5/dsgn313_a5_FILE-12.png",
  "/A5/dsgn313_a5_FILE-13.png",
  "/A5/dsgn313_a5_FILE-14.png",
  "/A5/dsgn313_a5_FILE-15.png",
  "/A5/dsgn313_a5_FILE-16.png",
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
        <h3 style="text-align: left; width: 100%; margin-bottom: 1rem;">Explore the GROWTH is a metaverse that explores themes of consumption briding my corpse with my final studio project.</h3>
      </section>

      <section id="slideshow" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: center; padding-top: 2rem;">
        <div id="slideshow-container" style="position: relative; width: 100%; height: auto; overflow: hidden;">
          <img id="slideshow-image" src="${A5Images[0]}" alt="Slideshow Image" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
      </section>

      <div class="nav-arrow left" onclick="window.location.href='./a4project.html'">&larr;</div>
    </main>
  `;

  // Slideshow logic
  let currentImageIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % A5Images.length;
    slideshowImage.src = A5Images[currentImageIndex];
  }, 3000); // Change image every 3 seconds

} catch (error) {
  console.error("Error rendering the app:", error);
}
