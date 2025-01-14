import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";
import { Routes } from "../src/components/routes/routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes /> 
      <Footer />
    </Layout>
  );
}

export default App;
