import './style.css';\
// Create a <link> element
document.addEventListener('DOMContentLoaded', () => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './src/style.css'; // Correct path to your CSS file
    document.head.appendChild(link);
});

import data from "./data/data.js"; 
// Ensure the correct file extension is used
//import { createThreeScene } from "./threeScene";

const media = [
  "./public/cubeDrawings/Rachdi_Zyad_A1.1_DSGN313.png",
  "./public/cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction1.png",
  "./public/cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction2.png",
  "./public/cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction3.png",
  "./public/cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction4.png",
];

const treeDrawings = [
  "./public/treeDrawings/image5.jpeg",
  "./public/treeDrawings/image6.jpeg",
  "./public/treeDrawings/image7.jpeg",
  "./public/treeDrawings/image8.jpeg",
  "./public/treeDrawings/image9.jpeg",
  "./public/treeDrawings/image10.jpeg",
  "./public/treeDrawings/image11.jpeg",
  "./public/treeDrawings/image12.jpeg",
  "./public/treeDrawings/image13.jpeg",
  "./public/treeDrawings/image14.jpeg",
  "./public/treeDrawings/image15.jpeg",
  "./public/treeDrawings/image16.jpeg",
  "./public/treeDrawings/image17.jpeg",
  "./public/treeDrawings/image18.jpeg",
  "./public/treeDrawings/image19.jpeg",
  "./public/treeDrawings/image20.jpeg",
];

const treeDrawings2 = [
"./public/treeDrawings/image1.jpg",
"./public/treeDrawings/image2.jpg",
"./public/treeDrawings/image3.jpg",
"./public/treeDrawings/image4.svg",
];

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>

      <section id="projects">
        <div id="project-row" style="width: 100%; display: flex; flex-direction: row; align-items: center; flex-wrap: wrap;">
          <div class="image-container" style="width: 80%; height: auto; display: flex; justify-content: center;">
            <img src="./public/cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="width: 80%; height: auto;" />
            <div id="images-description" style="width: 50%; display: flex; flex-direction: column; align-items: start;">
            <h2 id="title" style="text-align: start;">Project 1</h2>
            <h4 id="description" style="text-align: start; max-width: 800px;">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
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
      </section>
      <section id="title" style="text-align: start;">
        <div>
          <h3 id="title" style="text-align: start;">Used Images</h3>
        </div>
        <div id="all-tree-drawings" style="display: flex; justify-content: center; flex-wrap: nowrap; margin-top: 1em; overflow-x: auto;">
          ${[...treeDrawings, ...treeDrawings2]
            .map(
              (item, index) => `<img src="${item}" alt="treeDrawing${index + 1}" style="margin: 2px; width: 50px; height: 70px; object-fit: contain; cursor: pointer;" onclick="openModal('${item}')" />`
            )
            .join("")}
        </div>
      </section>
   
    </main>

    <div id="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.9);">
      <span style="position: absolute; top: 20px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img id="modal-content" style="max-width: 75%; max-height: 75%;">
      </div>
    </div>
  `;
} catch (error) {
  console.error("Error rendering the app:", error);
}

window.openModal = function(src) {
  try {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-content');
    modal.style.display = "block";
    modalImg.src = src;
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
