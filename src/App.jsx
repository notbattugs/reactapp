import Testimonials from "./components/Testimonials";
import Presentation from "./components/Presentation";


const App = () => {
  return (
    <div style={{ display:"flex",  backgroundColor:"beige",width:"100%",height:"100vh" }}>
      <Testimonials
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8Y3tLEo_9RvSpPa5QBM2UBJqDvXzQC-2XqdOMQftqLDMuLGGW2QmeYvJUD7lySLU1uw&usqp=CAU"
        name="Amy Klassen"
        content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
        star={[0, 1, 2, 3, 4]}
      />
      <Presentation floorImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8Y3tLEo_9RvSpPa5QBM2UBJqDvXzQC-2XqdOMQftqLDMuLGGW2QmeYvJUD7lySLU1uw&usqp=CAU"
      contet = "Data-Driven Design is Killing Our Instincts "
      fontContent= " Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team"
      juctTime='2nd January ,2022'
      name = 'Jane Cooper       |'/>
    </div> 
  );
};

export default App;  