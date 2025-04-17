import './style.css';
import data from "./data/data.js";
import { createThreeScene } from "./threeScene.js";

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

    <main id="container" style="padding-top: 10em;">
      <div class="nav-arrow left" onclick="window.location.href='../index.html'">&larr;</div>
      <div class="nav-arrow right" onclick="window.location.href='./page3.html'">&rarr;</div>
      
      <section id="projects" style="width: 100%; display: flex; flex-direction: column; align-items: start;" class="grid-section">
        <div style="width: 100%; max-width: 1050px; margin: 0 auto; text-align: left;">
          <h2 style="text-align: left; margin-bottom: 2rem;">A2 Project</h2>
          <h3 style="text-align: left; width: 100%; margin-bottom: 1rem;">Through my experiments exporting low-poly Blender models to Rhino3D and
          applying SubD/NURBS conversions as well as mesh modifications, I explored how
          file formats, import settings, and geometry types impact topology, form, face count
          and volume</h3>
          <h4 style="text-align: left; width: 100%;"> 
            <br>
            <b>Format</b>
            <br>
            Using formats like .obj, .fbx, and .3dm on different software revealed that 3d
            modeling software automatically repairs or triangulates meshes during export. For
            example, .obj and .fbx files and preserved quad-based topology better than others
            where triangulation disrupted edge loops. Modifications like Mesh Repair or Reduce
            Mesh in Rhino had negligible effects, implying that conversions applied similar
            alteration upon exporting.
            <br><br>
            <b>Detail and Complexity</b>
            <br>
            Converting high-poly meshes (e.g., Yoshi's 10k+ faces) to NURBS surfaces in
            Rhino failed entirely due to computational limits, while low-poly models (pavilion)
            produced overly complicated surfaces. Quads maintained clean consistent
            topology during export, enabling predictable subdivisions. Triangulated meshes
            were more difficult to subdivide cleanly, Scale and symmetry matter. Symmetric,
            low-ploy models resisted visible degradation during conversions, while asymmetric
            or detailed forms exposed flaws in automated conversion processes. This suggests
            that topology optimization prior to conversion is critical for complex shapes.
            Operating in different software is less about flawless transfers and more about
            knowing what will be compromised and how to work around it.
          </h4>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div style="width: 100%; max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
          ${[0, 1, 2].map((index) => `
            <div style="display: flex; justify-content: center; align-items: center; margin: 0 auto 2rem; gap: 2rem; width: 100%; max-width: 900px;">
              <div class="model-container" style="width: 375px; height: 375px;">
                <div id="model${index + 1}" style="width: 100%; height: 100%;"></div>
              </div>
              <div class="image-container" style="height: 375px; max-width: none;">
                <img src="${A2Images[index]}" alt="A2-image${index + 1}" style="height: 375px; width: auto; max-width: none;" onclick="openModal('${A2Images[index]}')" />
              </div>
            </div>
          `).join("")}
          ${A2Images.length > 3 ? `
            <div style="display: flex; justify-content: center; margin-top: 2rem; max-width: 900px; width: 100%;">
              <div class="image-container">
                <img src="${A2Images[3]}" alt="A2-image4" style="height: 375px; width: auto;" onclick="openModal('${A2Images[3]}')" />
              </div>
            </div>
          ` : ''}
        </div>
      </section>
    </main>

    <div id="modal" style="display: none;">
      <span onclick="closeModal()">&times;</span>
      <img id="modal-content">
    </div>
  `;

  // Initialize Three.js scenes
  A2Models.forEach((modelPath, index) => {
    createThreeScene(`#model${index + 1}`, modelPath);
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
