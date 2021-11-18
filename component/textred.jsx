const Textred = ({ title }) => (
    <h3
      style={{
        paddingLeft: "60px",
        paddingRight: "60px",
        color: "red",
        textDecoration: "line-through"
      }}
    >
      {title}
    </h3>
  );
  
  export default Textred;