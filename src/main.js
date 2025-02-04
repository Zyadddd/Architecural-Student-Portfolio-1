import './style.css';

import data from "./data/data.js"; 
import { createThreeScene } from "./threeScene.js";  // Fix the import path and uncomment

const media = [
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction1.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction2.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction3.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction4.png",
];

const treeDrawings = [
  "./treeDrawings/image5.jpeg",
  "./treeDrawings/image6.jpeg",
  "./treeDrawings/image7.jpeg",
  "./treeDrawings/image8.jpeg",
  "./treeDrawings/image9.jpeg",
  "./treeDrawings/image10.jpeg",
  "./treeDrawings/image11.jpeg",
  "./treeDrawings/image12.jpeg",
  "./treeDrawings/image13.jpeg",
  "./treeDrawings/image14.jpeg",
  "./treeDrawings/image15.jpeg",
  "./treeDrawings/image16.jpeg",
  "./treeDrawings/image17.jpeg",
  "./treeDrawings/image18.jpeg",
  "./treeDrawings/image19.jpeg",
  "./treeDrawings/image20.jpeg",
];

const treeDrawings2 = [
"./treeDrawings/image1.jpg",
"./treeDrawings/image2.jpg",
"./treeDrawings/image3.jpg",
"./treeDrawings/image4.svg",
];

const A2Images = [
  "/A2/DSGN313_A2-1.png",
  "/A2/DSGN313_A2-12.png",
  "/A2/DSGN313_A2-13.png",
  "/A2/DSGN313_A2-5-1.png"
];

const A2Models = [
  "/3DModels/project2/3.obj",
  "/3DModels/project2/2.obj",
  "/3DModels/project2/1.obj"
];

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>

      <section id="projects">
        <div class="project-container" style="width: 100%; max-width: 1200px; margin: 0 auto;">
          <div id="project-row" style="width: 100%; display: flex; flex-direction: row; align-items: center; justify-content: center;">
            <div class="image-container" style="width: 100%; display: flex; justify-content: center; align-items: start;">
              <img src="./cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="width: 50%; height: auto;" />
              <div id="images-container" style="width: 40%; padding-left: 5%;">
                <h2 id="title">Mindful Excess</h2>
                <br>
                <h4 id="description">My "Cadavre Equis" examines the relationship between my use of technology for entertainment and my desire to remain mindful and present. These two seemingly conflicting desires encapsulate my experience of life in the digital age—a constant flux between contradictory frameworks of thought. Whole heartedly believing that happiness comes from within; I still indulge in thoughtless hedonism. As I get carried away on the ever stimulating rollercoaster of content I remember what I had originally meant to do. Life in the digital age is confusing…</h4>
              </div>
            </div>
          </div>
          <div id="images" style="display: flex; justify-content: center; flex-wrap: wrap;">
            ${media
              .map(
                (item, index) => `<img src="${item}" alt="media${index + 1}" style="margin: 5px; width: 220px; height: auto; cursor: pointer;" onclick="openModal('${item}')" />`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section style="width: 100%; display: flex; flex-direction: column; align-items: center;" class="grid-section">
        <h3 style="margin-bottom: 1rem;">Used Images</h3>
        <div style="width: 100%; overflow: hidden;">
          <div class="grid grid-regular">
            ${[...treeDrawings, ...treeDrawings2]
              .map(
                (item, index) => `
                <div class="grid-item">
                  <img src="${item}" alt="treeDrawing${index + 1}" style="cursor: pointer;" onclick="openModal('${item}')" />
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <hr class="section-divider">
      <div class="nav-arrow right" onclick="window.location.href='/a2project'">&rarr;</div>
    </main>
  `;

  // Initialize Masonry
  document.addEventListener('DOMContentLoaded', () => {
    const grids = document.querySelectorAll('.masonry');
    grids.forEach(grid => {
      imagesLoaded(grid, function() {
        new Masonry(grid, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          fitWidth: true,
          gutter: 10,
          horizontalOrder: true,
          initLayout: true
        });
      });
    });

    // Initialize Three.js scenes
    A2Models.forEach((modelPath, index) => {
      createThreeScene(`#model${index + 1}`, modelPath);  // Change to use createThreeScene
    });
  });

} catch (error) {
  console.error("Error rendering the app:", error);
}

window.openModal = function(src) {
  try {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-content');
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.style.cursor = "default";

    // Only for the three specific images that should be linked
    if (src === "./treeDrawings/image1.jpg" || 
        src === "./treeDrawings/image2.jpg" || 
        src === "./treeDrawings/image3.jpg") {
      modalImg.style.cursor = "pointer";
      modalImg.onclick = function() {
        let url;
        switch(src) {
          case "./treeDrawings/image1.jpg":
            url = "https://tr.pinterest.com/pin/844493674056859/";
            break;
          case "./treeDrawings/image2.jpg":
            url = "https://ca.pinterest.com/pin/266205027949346314/";
            break;
          case "./treeDrawings/image3.jpg":
            url = "https://www.freepik.com/free-vector/different-shape-message-bubbles-blue-grey_77988500.htm";
            break;
        }
        if (url) window.open(url, '_blank');
      };
    } else {
      modalImg.onclick = null;
    }
  } catch (error) {
    console.error("Error opening modal:", error);
  }
}

window.closeModal = function() {
  try {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  } catch (error) {
    console.error("Error closing modal:", error);
  }
}
