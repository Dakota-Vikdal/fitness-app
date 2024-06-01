import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import FoodContainer from './components/FoodContainer'
import NotFound from './components/NotFound'

function App() {
  return (
    //utilizing fragments in order to keep the code cleaner and more performant
    
      <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addfood" element={<FoodContainer/>} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
      </>
  );
}

export default App;
