import {Home} from "./assets/pages/home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/login" element={<LoginPage />} />*/}
              {/*<Route path="/registrationPage" element={<RegistrationPage />} />*/}
              {/*<Route path='/tumorPage' element={<TumorPage />}/>*/}
              {/*<Route path='/pneumoniaPage' element={<TumorPage />}/>*/}
              {/*<Route path='/heartAttackPage' element={<HeartAttackPage />}/>*/}
          </Routes>
      </BrowserRouter>
  )
}

export default App;
