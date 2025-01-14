import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Home } from "../../screens/home/home";
import { Products } from "../../screens/products/products";
import { Aboutus } from "../../screens/aboutus/aboutus";
import { Contact } from "../../screens/contact/contact";

export const Routes = () => {
  return (

        <ReactDomRoutes>
          <Route path="/" element={<Home />} />

          <Route path="/productos" element={<Products/>}/>
          <Route path="/nosotros" element={<Aboutus/>}/>
          <Route path="/contacto" element={<Contact/>}/>

          <Route path="*" element={<p>Error</p>} />
        </ReactDomRoutes>

  );
};
 export default Routes;