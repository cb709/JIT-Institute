import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import hero from "../../images/hero-image.svg";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <Row xs={1} lg={2} className="py-5 hero-content">
        <Col>
          <h2 className="hero-sub-heading mb-3">
            <FaCheckCircle /> দেশ সেরা আইটি ট্রেইনিং ইন্সটিটিউট
          </h2>
          <h1 className="main-heading mb-3">
            সঠিক দক্ষতাই হতে পারে, <br></br>আপনার ক্যারিয়ার শুরুর চাবিকাঠি
          </h1>
          <p>
            অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে জেআইটি ইনস্টিটিউট প্রস্তুত
            আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি কোর্স
            থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।
          </p>
          <div className="hero-btns mt-4">
            <button className="dark-btn">কোর্স সমূহ</button>
            <button className="video-btn ms-lg-3">
              {" "}
              <BsPlayCircle /> ভিডিও দেখুন
            </button>
          </div>
        </Col>
        <Col className="ps-lg-5">
          <Image src={hero}></Image>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
