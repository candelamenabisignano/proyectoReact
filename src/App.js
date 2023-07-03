import NavBar from './components/NavBar';
import Logo from "./assets/Logo.png"
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar logo={Logo}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
