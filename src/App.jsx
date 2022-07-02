import logo from './logo.svg';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './vendor/css/style.css'
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
