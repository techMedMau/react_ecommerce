import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
