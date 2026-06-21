const ClassCard = ({ name, guru }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{guru}</p>
    </div>
  );
};

export default ClassCard;