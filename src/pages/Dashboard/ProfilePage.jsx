import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import profile from '../../components/img/Yo.jpg';
import emptyBadge from '../../components/img/blank-user-profile.png';
import useAuth from '../../components/Auth/useAuth';
import '../../styles/Profile.scss';

const Profile = () => {

  const { userData, user } = useAuth();
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="profile-page">
      <br /><h1>Profile</h1>
      <div className="portada"></div>
      <Container className="mt-5">
        <Row>
          <Col xs={12} sm={7} md={7} lg={9} className="display-container">
        {/* ---------------Perfiles Vistos--------------- */}
            <Card className="mt-3">
              <Card.Title>
                <h3 className="m-3">Profile Explored</h3>
                <hr className="mx-3" />
              </Card.Title>
              <Card.Body>
                <h6>You haven't seen any profile yet</h6>
                <p>Start looking for your personal trainer with our recomendations.</p>
                <button className="mt-3">Explore</button>
              </Card.Body>
            </Card>

        {/* ---------------Datos Personales--------------- */}
            <Card className="mt-3">
              <Card.Title>
                <h3 className="m-3">Personal Info</h3>
                <hr className="mx-3" />
              </Card.Title>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <label className="d-flex flex-column">Name:
                    <input type="text" />
                  </label>
                  <label className="d-flex flex-column">Last Name:
                    <input type="text" />
                  </label>
                  <label className="d-flex flex-column">Birth Day:
                    <input type="date" />
                  </label>
                </div>

                <div className="d-flex flex-column">
                  <label className="d-flex flex-column">Email:
                    <input type="text" />
                  </label>

                  <label className="d-flex flex-column">Mobile:
                    <input type="text" />
                  </label>
                </div>
                <button className="mt-3">Save</button>
              </Card.Body>
            </Card>

        {/* ---------------Reset Password--------------- */}
            <Card className="mt-3">
              <Card.Title>
                <h3 className="m-3">Reset Password</h3>
                <hr className="mx-3" />
              </Card.Title>
              <Card.Body>
                <div className="d-flex flex-column">
                  <label className="d-flex flex-column">Actual Password:
                    <input type="text" />
                  </label>

                  <label className="d-flex flex-column">New Password:
                    <input type="text" />
                  </label>
                  
                  <label className="d-flex flex-column">Confirm New Password:
                    <input type="text" />
                  </label>
                </div>
                <button className="mt-3">Save</button>
              </Card.Body>
            </Card>

        {/* ---------------Delete Account--------------- */}
            <Card className="mt-3 mb-3">
              <Card.Title>
                <h3 className="m-3">Delete Account</h3>
                <hr className="mx-3" />
              </Card.Title>
              <Card.Body>
                <h6>Once you delete your account there is no way back</h6>
                <p>Please be sure you want to delete your account forever 😢  </p>
                <button className="mt-3">Delete</button>
              </Card.Body>
            </Card>
          </Col>
          
          {/* ---------------- Profile Card -------------------- */}
          <Col xs={12} sm={5} md={5} lg={3} className="column-card">
            <Row>
              <Col>
                <Card className="d-flex profile-card">
                  <Card.Img 
                    src={emptyBadge}
                    style={{
                    padding: "1rem",
                    borderRadius: "50%",
                    objectFit: "cover",
                    alignSelf: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                    <Card.Text>{user.email}<br />account: <b>{user.account}</b></Card.Text>
                    <Card.Text>Loving tennis forever... 💙🎾</Card.Text>
                    <div className="d-flex flex-column">
                      <button>Settings</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
