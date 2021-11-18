const Button = ({ title, colour }) => (
    <button
      style={{
        width: "140px",
        height: "50px",
        background: "green",
        border: "none",
        borderRadius: "5px",
        fontSize: "18px",
        color: "white"
      }}
    >
      {title}
    </button>
  );
  
  export default Button;