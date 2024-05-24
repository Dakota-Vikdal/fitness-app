import {Routes, Route} from 'react-router-dom'
import ExerciseLand from './components/ExerciseLand'
import NavBar from './components/NavBar'
import Home from './components/Home'
import OtherLand from './components/OtherLand'

function App() {
  return (
    //utilizing fragments in order to keep the code cleaner and more performant
    <>
      <NavBar/>
      <Routes>
        
        
        <Route path="/" element={<Home/>}/>
        <Route path="/other-land" element={<OtherLand/>}/>
        <Route path="/exercise-land" element={<ExerciseLand/>}/>
        
        
      </Routes>
    </>
  );
}

export default App;
