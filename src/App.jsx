import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import Propertiespage from "./pages/PropertiesPage";
import PropertyDetails from "./pages/PropertyDetails";
import ServicePage from "./pages/ServicePage";
import Layout from "./components/Layout";
import NoPage from "./pages/NoPage";
import PropertyPage from "./pages/PropertyPage";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Homepage />} />
          <Route path="aboutuspage" element={<AboutUsPage/>} />
          <Route path="contactpage" element={<ContactPage/>} />
          <Route path="propertiespage" element={<Propertiespage />} />
          <Route path="propertiespage/:propertyId" element={<PropertyPage/>} />
          <Route path="propertydetails" element={<PropertyDetails/>} />
          <Route path="servicepage" element={<ServicePage/>} />
          <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
