import { Box } from "../../components/core";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import { Testomonials } from "./Testomonials";
import { Information } from "./Information";
import { Section } from "./Section";
import { Slides } from "./Slides";
import { Footer } from "./Footer";
import NavBar from "./NavBar";

export const Homepage = () => {
  return (
    <>
      <NavBar />
      <Slides />
      <Box className="container-fluid">
        <Section />
      </Box>
      <Box className=" bg-secondary">
        <Information />
        <Banner />
      </Box>
      <Box className="container-fluid">
        <Gallery />
        <Testomonials />
      </Box>
      <Footer />
    </>
  );
};
