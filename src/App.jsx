
import Testimonials from './components/Testimonials';

const App = () => {

  
  return (
    <div>
      <Testimonials image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4Z86jL_18hhLgNr74qyXeG2ZVNYCj6ODTjLQYFhP21_9X-PZ8mrBTRlshTIPzIeuZ6c&usqp=CAU" 
      firstName="Johnny" 
      space=" " 
      secondName="Sins"
       content="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place. "
       
      star={[0,1,2,3,4]}
      />
    </div>
  )
}

export default App; 