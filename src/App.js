import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plant" element={<ShopPage />} />
     
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
