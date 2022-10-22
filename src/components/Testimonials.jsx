import Star from "./Star";

const Testimonials = ({ image, name, content, star }) => {
  return (
    <div style={{ display: "flex", margin: 10 }}>
      <div
        style={{
          width: 330,
          height: 330,
          backgroundColor: "#FFFFFF",
          margin: 10,
        }}
      >
        {star.map((e) => {
          return <Star />;
        })}
        <p>{content}
            </p>
       
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center', flexDirection: "column"}}>
          <img
            src={image}
            alt={image}
            style={{ width: 30, height: 30, borderRadius: 50,  }}
          />
          <h3>{name}</h3>
        </div>
      </div>
    </div>
);
};

export default Testimonials;