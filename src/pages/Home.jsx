import { useParams } from "react-router-dom";



const Home = () =>{
        const location=useParams();
        return(
            <div>Home page location {location.pathname}
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius quam accusamus. Exercitationem explicabo accusamus repellendus eveniet consequuntur consequatur quod at recusandae quos sit, eligendi quasi eum et, magni minima perferendis fugiat nesciunt impedit molestiae commodi alias nobis reiciendis? Veritatis consequatur quia ratione ipsum magni vero iste laudantium quis consequuntur doloremque porro ducimus atque dolor ex, et necessitatibus corrupti reiciendis obcaecati deleniti illo praesentium fugiat amet. Rem perferendis accusamus nihil odio vel, tempora magni molestias omnis ab quam suscipit fugit doloremque facere, deserunt velit consequuntur illum delectus rerum placeat, voluptatem libero. A suscipit officiis minima magni. Nisi eum architecto aut.</h1>
            </div>
        );
}
export default Home