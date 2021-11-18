const CircleImage = ({ CircleImageaddress }) => (
    <img
      src={CircleImageaddress}
      style={{
        background: "black",
        border: "1px solid black",
        borderRadius: "50%",
        float: "right",
        margin: "5px"
      }}
    />
  );
  
  export default CircleImage;