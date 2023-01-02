import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Main.css"

const Main = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
