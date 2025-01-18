import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const element = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row" style="width: 100%; display: flex; flex-direction: row; align-items: center; flex-wrap: wrap;">
        <div class="image-container" style="width: 500%; height: auto; display: flex; justify-content: center;">
          <img src="./cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="max-width: auto; height: auto;" />
        </div>
        <div id="images-description" style="width: 50%; display: flex; flex-direction: column; align-items: center;">
          <div id="images" style="display: flex; justify-content: center; flex-wrap: wrap;">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" style="margin: 5px;" />`
              )
              .join("")}
          </div>
          <h4 id="description" style="text-align: center; max-width: 800px;">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
        </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${data.contact.linkedin}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${data.contact.github}</a></li>
    </ul>
  </main>
`;
