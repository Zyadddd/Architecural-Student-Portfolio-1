import "./style.css";
import data from "./data/data";
//import { createThreeScene } from "./threeScene";

const media = [
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction1.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction2.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction3.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction4.png",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row" style="width: 100%; display: flex; flex-direction: row; align-items: center; flex-wrap: wrap;">
        <div class="image-container" style="width: 50%; height: auto; display: flex; justify-content: center;">
          <img src="./cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="width: 75%; height: auto;" />
        </div>
        <div id="images-description" style="width: 50%; display: flex; flex-direction: column; align-items: center;">
          <h4 id="description" style="text-align: center; max-width: 800px;">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
        </div>
      </div>
      <div id="images" style="display: flex; justify-content: center; flex-wrap: wrap;">
        ${media
          .map(
            (item, index) => `<img src="${item}" alt="media${index + 1}" style="margin: 5px; width: 250px; height: auto; cursor: pointer;" onclick="openModal('${item}')" />`
          )
          .join("")}
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>

  <div id="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 200%; height: 200%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.9);">
    <span style="position: absolute; top: 20px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
    <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
      <img id="modal-content" style="max-width: 200%; max-height: 200%;">
    </div>
  </div>
`;

window.openModal = function(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-content');
  modal.style.display = "block";
  modalImg.src = src;
}

window.closeModal = function() {
  const modal = document.getElementById('modal');
  modal.style.display = "none";
}
