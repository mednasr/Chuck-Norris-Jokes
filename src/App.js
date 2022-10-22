import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./pages/Main";
import Favorites from "./components/Favorites";

function App() {

  return (
      <div className="container">
        <div className="wrapper">
            <Header className="App-header"/>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/favorites" element={<Favorites/>} />
            </Routes>

        </div>
      </div>
  );
}

export default App;
