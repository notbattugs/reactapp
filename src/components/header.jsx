import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <hr />
        <Link to="./Home"> Home</Link>
        <hr />
        <Link to="./SignUp"> SignUp</Link>
        <hr />
        <Link to="./Login"> Login</Link>
        <hr />  
        </div>
    );
}
export default Header