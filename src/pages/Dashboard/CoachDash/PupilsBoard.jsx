import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap';
import useAuth from '../../../components/Auth/useAuth';
import emptyBadge from '../../../components/img/blank-user-profile.png';

const Pupils = () => {

  const [pupilModal, setPupilModal] = useState(false)
  const { pupils, pupilsData } = useAuth();
  console.log(pupils);
  useEffect(() => {
    pupilsData();
  }, []);

  return (
    <div>
      <Modal show={pupilModal}>
        <Modal.Header>
          <img 
            src={emptyBadge} 
            alt="badge"
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              objectFit: "cover",
            }} 
          />
          <div>
            <h1>Pupil Name</h1>
          </div> 
        </Modal.Header>
        <Modal.Body>
          <h4>Description:</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas modi eaque debitis iure? Suscipit quia beatae voluptates cumque sapiente aperiam assumenda eos.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={()=>setPupilModal(false)}>Close</button>
        </Modal.Footer>
      </Modal>

      <Container className="py-4">
        <h1>Pupils</h1>
      </Container>
      <table className="table table-striped ml-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Img</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Level</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {pupils.map(item => (
            <tr>
              <th scope="row">💪</th>
              <td>{item.firstName}</td>
              <td>
                <img 
                  src={item.avatar} 
                  alt="avatar" 
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
              </td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>🌋🌋🌋</td>
              <td>
                <button className="btn btn-primary" onClick={()=>setPupilModal(true)}>Inspect</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pupils;
