import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Col from 'react-bootstrap/Col';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <Container>
  <Row xs={1}>
  <Col>
  <App />
  </Col></Row>
  </Container>
  </React.StrictMode>
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
