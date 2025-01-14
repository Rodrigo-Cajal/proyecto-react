import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";
import { Routes } from "../src/components/routes/routes";
import { BrowserRouter } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes />
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
