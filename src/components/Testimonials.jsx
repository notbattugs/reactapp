import Star from "./Star";

const Testimonials = ({ image, firstName,secondName,space, content, star }) => {

   

    return (
        <div>
            {
                star.map(e => {
                    return (
                        <Star />
                    )
                })
            }
            <p>
                {content}
            </p>
            <div>
                <img src={image} alt={image} style={{borderRadius:1000,}} />
                <h3>
                    {firstName}
                    {space}
                    {secondName}
                   
                </h3>
            </div>
        </div>
    )

}

export default Testimonials;