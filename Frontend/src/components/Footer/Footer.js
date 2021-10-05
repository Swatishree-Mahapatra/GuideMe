import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GuideME: A ultimate guide for all students.
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Dream</FooterLink>
            <FooterLink href="#">Insights</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Courses</Heading>
            <FooterLink href="#">JEE</FooterLink>
            <FooterLink href="#">NEET</FooterLink>
            <FooterLink href="#">NTSE</FooterLink>
            <FooterLink href="#">UPSC</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Abhas</FooterLink>
            <FooterLink href="#">Aashish</FooterLink>
            <FooterLink href="#">Swati</FooterLink>
            <FooterLink href="#">Ojasvi</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;