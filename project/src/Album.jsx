export const Album = ({ name, year, children }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>release in {year}</p>
      {children}
    </div>
  );
};
