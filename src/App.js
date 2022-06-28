import Navbar from  './Components/Navbar/Navbar.jsx'
import './App.css'
import 'bootstrap'
import Main from './Components/Main/Main.jsx'
import Footer from './Components/footer/footer.jsx'


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <div className='container'>
      <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
