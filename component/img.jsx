const Image = ({ imageaddress }) => (
    <img
      src={imageaddress}
      style={{
        width: "500px",
        height: "300px",
        borderStartStartRadius: "20px",
        borderTopRightRadius: "20px"
      }}
    />
  );
  
  export default Image;