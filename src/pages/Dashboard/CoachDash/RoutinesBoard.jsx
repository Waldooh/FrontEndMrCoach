import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Popup from '../../../components/Popup';
// import { DateRangePicker } from 'react-date-range';

const Routines = () => {

  const [openModal, setOpenModal] = useState(false);
  const [ejercicio, setEjercicio] = useState({
    _id: "",
    title: "",
    img: "",
    class: "",
    rest: "",
    days: "",
    weeks: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEjercicio({ ...ejercicio, [name]: value });
  };

  return (
    <div>
      <Popup trigger={openModal} setTrigger={setOpenModal}>
        <h1>Modal Routines</h1>
        <Container>
          <Row className="label-group">
            <Col>
              <label className="mb-0">Routine name:
                <input 
                  className="label-control" 
                  type="text" 
                  name="title" 
                  value={ejercicio ? ejercicio.title : ""} 
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
            <Col>
              <label className="mb-0">Class:
                <input 
                  className="label-control" 
                  type="text" 
                  name="muscle" 
                  value={ejercicio ? ejercicio.class : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
          </Row>

          <Row className="label-group">
            <Col>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Mon</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Tue</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Wed</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Thu</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Fri</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Sat</label>
              <input type="checkbox" id="horns" name="horns" />
              <label for="horns">Sun</label>
            </Col>
          </Row>

          <Row className="label-group">
            <Col>
              <label className="mb-0">Rest:
                <input 
                  className="label-control" 
                  type="text" 
                  name="reps"
                  value={ejercicio ? ejercicio.rest : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
            <Col>
              <label className="mb-0">Image:
                <input 
                  className="label-control" 
                  type="text" 
                  name="img" 
                  value={ejercicio ? ejercicio.img : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
          </Row>
          
          <Row className="label-group">
            <Col>
              <label className="mb-0">Days training: {/* implementar selector de días */}
                <input 
                  className="label-control" 
                  type="text" 
                  name="equipment" 
                  value={ejercicio ? ejercicio.days : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
            <Col>
              <label className="mb-0">Weeks: {/* implementar selector semalan */}
                <input 
                  className="label-control" 
                  type="text" 
                  name="link" 
                  value={ejercicio ? ejercicio.weeks : ""}
                  onChange={handleChange}
                /><br />
              </label>
            </Col>
          </Row>
          <Row>
            <label>Notes:
              <textarea 
                className="label-control" 
                name="notes" 
                value={ejercicio ? ejercicio.notes : ""}
                onChange={handleChange}
              />
            </label>
          </Row>
        </Container>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger" onClick={()=>setOpenModal(false)}>Cancel</button>
      </Popup>

      <h1>Routines</h1>
      <button className="btn btn-success mr-5" onClick={()=>setOpenModal(true)}>Add +</button>
      <table className="table table-striped ml-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Discipline</th>
            <th scope="col">Equipment</th>
            <th scope="col">Sessions</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Rapid weight loss</td>
            <td>💢</td>
            <td>Crossfit</td>
            <td>Rings</td>
            <td>15</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Muscle up</td>
            <td>👨‍🚀</td>
            <td>Crossfit</td>
            <td>Bands</td>
            <td>22</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Killer abs</td>
            <td>🦅</td>
            <td>Crossfit</td>
            <td>None</td>
            <td>30</td>
            <td>
              <button>Details</button>
              <button>Assign</button>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Routines;
