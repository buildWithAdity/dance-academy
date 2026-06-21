import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ academyName }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    course: "",
    photo: null
  });

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(e.target.files[0])
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your account has been created!");

    navigate("/profile", { state: formData });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h1 className="academy-name">{academyName}</h1>
        <p className="subtitle">Create Your Student Account</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input type="text" name="name" onChange={handleChange} required />

          <label>Upload Profile Photo</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />

          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} required />

          <label>Gender</label>
          <select name="gender" onChange={handleChange} required>
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} required />

          <label>Course</label>
          <select name="course" onChange={handleChange} required>
            <option value="">Select Course</option>
            <option>Arambha (Beginner)</option>
            <option>Madhyama (Intermediate)</option>
            <option>Praveshika (Advanced)</option>
          </select>

          <button type="submit">Create Account</button>

        </form>
      </div>
    </div>
  );
}

export default Signup;