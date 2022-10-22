import Rectangle from "./Rectangle.jsx";
const Presentation = ({contet , fontContent , floorImg , name , juctTime}) => {
    return (
        <div style={{width : 370 , height : 500 , backgroundColor: "#FFFFFF" }}>
            <Rectangle  style={{width : 500 , height : 500 ,}}/>
            <div>
                <h1>{contet}</h1>
                <p>{fontContent}</p>
            </div>
            <div style={{display : "flex", justifyContent: "space-evenly"}}>
                <img src={floorImg} alt={floorImg} style = {{ width : 50 , height : 50 , borderRadius : 100}}/>
                <p>{name}</p>
                <p>{juctTime}</p>
            </div>
        </div>
    );
};
export default Presentation;