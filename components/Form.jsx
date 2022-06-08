import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [apply, setApply] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async (e) => {
    await axios.post(
      `https://sheet.best/api/sheets/80e451ac-c7f6-48ba-b133-b4cf3ba6fd84`,
      {
        name,
        email,
        contactNumber,
        city,
        course,
        apply,
        purpose,
      }
    );

    res.status(200).send({ message: `We'll call you Soon! ${name}` });
  };

  return (
    <main
      style={{ position: "relative", left: "25%", color: "black" }}
      className="forms w-50 form-signin"
    >
      <form>
        <h4 className="text-light">Fill this form to make an Appoinment</h4>
        <div className="form-floating">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            className="form-control"
            id="floatingName"
            placeholder="John"
            required
          />
          <label htmlFor="floatingName">Full Name</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setContactNumber(e.target.value)}
            value={contactNumber}
            type="tel"
            name="contactNumber"
            className="form-control"
            id="floatingNumber"
            placeholder="123456789"
            required
          />
          <label htmlFor="floatingNumber">Contact number</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            name="city"
            className="form-control"
            id="floatingCity"
            placeholder="London"
            required
          />
          <label htmlFor="floatingCity">City</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setCourse(e.target.value)}
            value={course}
            type="text"
            name="course"
            className="form-control"
            id="floatingCourse"
            placeholder="IT"
            required
          />
          <label htmlFor="floatingCourse">Course</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setApply(e.target.value)}
            value={apply}
            type="text"
            name="apply"
            className="form-control"
            id="floatingCountry"
            placeholder="USA"
            required
          />
          <label htmlFor="floatingCountry">Country to apply</label>
        </div>
        <div className="form-floating">
          <input
            onChange={(e) => setPurpose(e.target.value)}
            value={purpose}
            type="text"
            name="purpose"
            className="form-control"
            id="floatingPurpose"
            placeholder="Work, Study, Visit"
            required
          />
          <label htmlFor="floatingNumber">Purpose</label>
        </div>
        <button
          onClick={handleSubmit}
          className="w-100 btn btn-lg btn-outline-light"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
