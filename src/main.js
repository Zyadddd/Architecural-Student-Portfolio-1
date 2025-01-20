import './style.css';
// Create a <link> element
document.addEventListener('DOMContentLoaded', () => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './style.css'; // Correct path to your CSS file
    document.head.appendChild(link);
});

import data from "./data/data.js"; 
// Ensure the correct file extension is used
//import { createThreeScene } from "./threeScene";

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
            <img src="./cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="width: 80%; height: auto;" />
            <div id="images-description" style="width: 50%; display: flex; flex-direction: column; align-items: start;">
            <h2 id="title" style="text-align: start;">Mindful Excess</h2>
            <h4 id="description" style="text-align: start; max-width: 550px;">My "Cadavre Equis" examines the relationship between my use of technology for entertainment and my desire to remain mindful and present. These two seemingly conflicting desires encapsulate my experience of life in the digital age—a constant flux between contradictory frameworks of thought. Whole heartedly believing that happiness comes from within; I still indulge in thoughtless hedonism. As I get carried away on the ever stimulating rollercoaster of content I remember what I had originally meant to do. Life in the digital age is confusing…</h4>
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

    <div id="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 1; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.9);">
      <span style="position: absolute; top: 20px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <a id="modal-link" href="" target="_blank">
          <img id="modal-content" style="max-width: 75%; max-height: 75%;">
        </a>
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
    const modalLink = document.getElementById('modal-link');
    modal.style.display = "block";
    modalImg.src = src;
    
    // Configure links for specific images
    switch(src) {
      case "./treeDrawings/image1.jpg":
        modalLink.href = "https://tr.pinterest.com/pin/844493674056859/";
        modalImg.style.cursor = "pointer";
        break;
      case "./treeDrawings/image2.jpg":
        modalLink.href = "https://ca.pinterest.com/pin/266205027949346314/";
        modalImg.style.cursor = "pointer";
        break;
      case "./treeDrawings/image3.jpg":
        modalLink.href = "https://www.freepik.com/free-vector/different-shape-message-bubbles-blue-grey_77988500.htm";
        modalImg.style.cursor = "pointer";
        break;
      default:
        modalLink.href = "javascript:void(0)";
        modalImg.style.cursor = "default";
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
