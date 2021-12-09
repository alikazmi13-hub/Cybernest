import react from "react";
import reactDom from "react-dom";
import "../Design/Project.css";
const Project = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-12" id="image_gallery_row">
            <div class="row">
              <div class="col-md-2 col-6">
                <h1>OUR Recent Projects</h1>
              </div>
              <div class="col-md-2 col-6">
                <h1>Project Name</h1>
              </div>
              <div class="col-md-2 col-6">
                <h1>Project Images</h1>
              </div>
              <div class="col-md-2 col-6">
                <h1>Projects Live View</h1>
              </div>
              <div class="col-md-2 col-6">
                <h1>CyberNest</h1>
              </div>
              <div class="col-md-2 col-6">Home</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
