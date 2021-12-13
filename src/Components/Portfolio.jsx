import reactDom from "react-dom";
import react from "react";
import { useState } from "react";
import "../Design/Portfolio.css";

// import Form from "./Form.js";
const Portfolio = () => {
  //ASSIGNING VALUES As variables
  const initiateState = {
    project_email: "",
    project_client: "",
    option_t: "",
    option_l: "",
    f_describe: "",
    p_file: "",
  };

  //Set useState
  const [formData, setFormData] = useState(initiateState);
  const [formerror, setFormError] = useState("null");
  let error = {
    field_id: "project_email",
    message: "Please Type your Email",
  };

  //Accessing Values
  const {
    project_email,
    project_client,
    project_Technology,
    project_language,
    project_descriptio,
    project_file,
  } = formData;

  // console.log("project_email");
  // console.log("p_name");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("project_email");

    //FORM VALIDAITON
    setFormError(null);
    setTimeout(() => {
      if (project_email === "") {
        let error = {
          field_id: "project_email",
          message: "Please Type your Email",
        };
        setFormError(error);
      }
    }, 2000);
  };

  //On change
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.project_email]: e.target.value,
    });
  };

  return (
    <>
      <div className="container-form">
        <form className="formSection" onSubmit={onSubmit}>
          <label className="label-client" for="l-client">
            Emai address
          </label>
          <input
            className="form-input"
            type="email"
            id="project_email"
            name="project_email"
            value={project_email}
            onChange={onChange}
            placeholder="name@example.com"
          />
          {formerror && formerror.field_id === "project_email" ? (
            <p>{formerror.message}</p>
          ) : null}

          <label className="label-client" for="l-client">
            Project Name
          </label>
          <input
            className="form-input"
            type="Text"
            value={project_client}
            id="project_client"
            name="project_name"
            placeholder="Your Project Name"
          />

          <label className=" label-client" for="exampleFormControlSelect">
            Select Technology
          </label>
          <select
            className="form_control1"
            value={project_Technology}
            id="option_t"
          >
            <option>Website</option>
            <option>APP</option>
            <option>Software</option>
          </select>

          <label className="label-client " for="exampleFormControlSelect">
            Select Language
          </label>
          <select
            ClassName="form_control"
            value={project_language}
            id="option_l"
          >
            <option>PHP</option>
            <option>REACT</option>
            <option>PYTHON</option>
            <option>WORDPRESS</option>
            <option>JAVASCRIPT</option>
          </select>

          <label className="des" for="exampleFormControlTextarea">
            Description
          </label>
          <textarea
            className="text-description"
            value={project_descriptio}
            id="form_desr"
            rows="5"
          ></textarea>

          <input type="file" value={project_file} className="custom-File" />
          <label id="label-client" for="customFile">
            Upload Your File
          </label>

          <button className="btn-portfolio" type="Submit" onClick={onSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default Portfolio;
