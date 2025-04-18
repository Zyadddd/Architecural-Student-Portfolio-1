import './style.css';
import data from "./data/data.js";
import { createThreeScene } from "./threeScene.js";

const A4Images = [
  "/A4/313_A4_Framing-images-0.jpg",
  "/A4/313_A4_Framing-images-1.jpg",
  "/A4/313_A4_Framing-images-2.jpg",
  "/A4/313_A4_Framing-images-3.jpg",
  "/A4/313_A4_Framing-images-4.jpg",
  "/A4/313_A4_Framing-images-5.jpg",
  "/A4/313_A4_Framing-images-6.jpg",
  "/A4/313_A4_Framing-images-7.jpg",
  "/A4/313_A4_Framing-images-8.jpg",
  "/A4/313_A4_Framing-images-9.jpg",
  "/A4/313_A4_Framing-images-10.jpg",
  "/A4/313_A4_Framing-images-11.jpg",
  "/A4/313_A4_Framing-images-12.jpg",
  "/A4/313_A4_Framing-images-13.jpg",
  "/A4/313_A4_Framing-images-14.jpg"
];

const A4Model = "/A4/3DPRINT.obj";
const A4LowPolyModel = "/A4/A4_lowpoly.obj";

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>
      
      <section id="text-section" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: left; padding-top: 2rem;">
        <h2 style="text-align: left; margin-bottom: 2rem;">A4 Project</h2>
        <h3 style="text-align: left; width: 100%; margin-bottom: 1rem;">Framming is a parametric pavilion designed to explore the themes of consumption.</h3>
        <h4 style="text-align: left; width: 100%;"></h4>
      </section>

      <section id="slideshow" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: center; padding-top: 2rem;">
        <div id="slideshow-container" style="position: relative; width: 100%; height: auto; overflow: hidden;">
          <img id="slideshow-image" src="${A4Images[0]}" alt="Slideshow Image" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
      </section>

      <section id="models" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: center; padding-top: 2rem; display: flex; gap: 2rem;">
        <div class="model-container" style="flex: 1; width: 100%; height: 250px; background: #111;">
          <div id="a4-model" style="width: 100%; height: 100%;"></div>
        </div>
        <div class="model-container" style="flex: 1; width: 100%; height: 250px; background: #111;">
          <div id="a4-lowpoly-model" style="width: 100%; height: 100%;"></div>
        </div>
      </section>

      <section id="additional-images" style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: center; padding-top: 2rem;">
        <img src="/A4/313_A4_Framing-images-8.jpg" alt="Additional Image 1" style="width: 100%; height: auto; object-fit: contain; margin-bottom: 1rem;">
        <img src="/A4/313_A4_Framing-images-9.jpg" alt="Additional Image 2" style="width: 100%; height: auto; object-fit: contain;">
      </section>

      <div class="nav-arrow left" onclick="window.location.href='a3project.html'">&larr;</div>
      <div class="nav-arrow right" onclick="window.location.href='a5project.html'">&rarr;</div>
    </main>
  `;

  // Slideshow logic
  let currentImageIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % A4Images.length;
    slideshowImage.src = A4Images[currentImageIndex]; // Directly switch to the next frame
  }, 3000); // Change image every 3 seconds

  // Initialize 3D model viewers
  createThreeScene("#a4-model", A4Model);
  createThreeScene("#a4-lowpoly-model", A4LowPolyModel);
} catch (error) {
  console.error("Error rendering the app:", error);
}
