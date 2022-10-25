// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import  Home from './pages/Home';
// import SignUp from './pages/signup';
// import Login from './pages/Login';
// import Header from './components/header';

// const App = () => {
//   return (

//     <BrowserRouter>

//     <Routes>
//       <Route path="/Home" element={<Home/>} />
//       <Route path="/Login" element={<Login/>} />
//       <Route path="/SignUp" element={<SignUp/>} />
//     </Routes>
//      <Header/>
//     </BrowserRouter>
//   );
// };

// export default App;  

import React from 'react'
import backgroundPicture from './assets/backgroundPicture.jpg'
import LogoDiv from './assets/teamText.png'
import './kuma.css'
function App() {
    return (
        <div className='container'>
            <div style={{width: "100vw", height: "100vh",
                backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/4350/50b7/a0ccc8f193e7504e307e73c31a017e88?Expires=1667779200&Signature=Atk~QO18TMzE1dLirfOUQN7QPlKw0LcxmUPNxBV8pSeY-~ePQ0OzuQCbmOG3upFh9tmib5c2M9X0wTuU9Hie14AxaIwsb~qAAH7D8VsELRvUUQ6bVclngRP3Z~6AwkcAxaqBA0tNsbqYwRuMyJq-mqeqk3TunpnCeolNhaZGpU0Hwrtr9kf-m3QZ4iVXD6yjWEYiFSKmfsT-SSV5tNDx3QlOBtXSOYC1K3WATNZwawA2kKcHvh9blg9q8LJZ6S8C5mBzNdkuAkUJ1uR0u-ZjZFICSfgT2DFiqJT3NJOQQOGGUAsq5MTTtqDSNCnr8166WDnxF8OWt-7OqEjE00EeQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')"
            }}>

            </div>
            <div className='LogoDiv'>
                <img src={LogoDiv} alt="" className='logoClass' />
            </div>

        </div >
    )
}

export default App