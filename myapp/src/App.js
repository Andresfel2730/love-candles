import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/header";
import Inicio from "./pages/inicio";
import Footer from "./pages/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog";
import Productos from "./pages/productos";
import Error404 from "./pages/error404";

function App() {
  return (
    <div className="text-light bg-dark vh-140">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element ={<Inicio />}/>
        <Route path="/ blog" element ={<Blog />}/>  
        <Route path="/productos" element ={<Productos />}/>  
        <Route path="/*" element ={<Error404 />}/>         
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
