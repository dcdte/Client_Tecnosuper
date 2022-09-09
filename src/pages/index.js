import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Map from "../components/Map";
import Bye from "../components/ByeSection";
import Formulario from "../components/FormSection";
import Footer from "../components/Footer";
import axios from "axios";
import Departament from "../utilities/Departament";

//Home

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //función para traer información de las tiendas del zoho
  async function getStores() {
    let shops = await axios.get(
      "https://stormy-chamber-42652.herokuapp.com/tienda"
    );
    return shops.data;
  }

  async function saveData() {
    Departament.stores = await getStores();
  }

  saveData();
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <div title="InfoSection" subtitle={"dummyText"} id="InfoSection">
        <InfoSection />
      </div>
      <div title="Map" subtitle={"dummytext"} id="Map">
        <Map />
      </div>
      <div>
        
      </div>
      <div title="Bye" subtitle={"dummytext"} id="Bye">
        <Bye />
      </div>
      <div title="Form" subtitle={"dummyText"} id="Form">
        <Formulario />
      </div>
      <Footer />
    </>
  );
};

export default Home;
