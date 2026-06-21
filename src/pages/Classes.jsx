import { useState } from "react";
import ClassCard from "../components/ClassCard";

function Classes() {
  const [classes] = useState([
    { name: "Junior Bharatanatyam", guru: "Experienced South Indian Teacher" },
    { name: "Intermediate Bharatanatyam", guru: "Traditional Training" },
    { name: "Senior Bharatanatyam", guru: "Performance Level" }
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Our Classes</h2>

      {classes.map((item, index) => (
        <ClassCard key={index} name={item.name} guru={item.guru} />
      ))}
    </div>
  );
}

export default Classes;