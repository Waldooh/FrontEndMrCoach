import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from '../img/blank-user-profile.png';
import video from '../img/play-video.png';

const CoachCV = () => {
  return (
    <div>
      Coach CV
      <div className="d-flex">
        <img 
          src={pic}
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
            alignSelf: "center",
          }}
          alt="pic" 
        />
        <div className="ml-3">
          <h3>Coach name</h3>
          <p>Entrenador de: gimnasia</p>
          <p>Previously $$$ per month</p>
        </div>
      </div>
      <Row>
        <Col>
          <h5>Description:</h5>
          <p>Lorem Ipsum is simply dummy text
of the printing and typesetting industry Ipsum is simply dummy text
of the printing and typesetting industry.</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>Experience:</h5>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </Col>
        <Col>
          <h5>Specialties:</h5>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </Col>
        <Col>
          <h5>Loves & hobbies:</h5>
          <ul>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </Col>
        <hr />
      </Row>

      <Row>
        <Col>
          <h5><b>TRANING PLAN</b></h5>
          <h5>Introduction:</h5>
          <p>Lorem Ipsum is simply dummy text
of the printing and typesetting.</p>
          <img 
            src={video}
            style={{
              width: "300px",
              height: "180px",
              borderRadius: "5px",
              objectFit: "cover",
              alignSelf: "center",
            }}
            alt="video" 
          />
        </Col>
        <Col>
          <div>
            <h5>week 1 - Starting low</h5>
            <ul>
              <li>Ipsum is simply</li>
              <li>dummy text</li>
              <li>printing and typesetting</li>
            </ul>
          </div>
          <div>
            <h5>week 2 - Getting medium</h5>
            <ul>
              <li>Ipsum is simply</li>
              <li>dummy text</li>
              <li>printing and typesetting</li>
            </ul>
          </div>
          <div>
            <h5>week 3 - Finish hard</h5>
            <ul>
              <li>Ipsum is simply</li>
              <li>dummy text</li>
              <li>printing and typesetting</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CoachCV;
